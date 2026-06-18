import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

export interface GenerateScriptRequest {
  fund: string;
  organisation: string;
  agencyKeywords: string[];
  fundDescription: string;
  history: { question: string; chosenLabel: string }[];
}

const client = new Anthropic();

export async function POST(req: NextRequest) {
  let body: GenerateScriptRequest;

  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { fund, organisation, agencyKeywords, fundDescription, history } = body;

  if (!fund || !organisation) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const answersNarrative = history
    .map((h) => h.chosenLabel)
    .join(". ");

  const keywordList = agencyKeywords.join(", ");

  const systemPrompt = `You are a specialist Irish business grant writer. Your job is to write a concise, natural opening pitch that a founder can use when first making contact with ${organisation} about the ${fund}.

The pitch must weave together everything the founder has confirmed about their business into a single coherent statement — not a list of bullet points, not an email. Just the words they would say or write to open the conversation.

RULES:
1. Build the statement from the founder's actual answers — every confirmed fact must appear naturally in the text.
2. End with their specific ask: the ${fund} from ${organisation}.
3. Use ${organisation}'s own vocabulary where natural. Key terms: ${keywordList}.
4. Tone: direct, confident, professional. No filler phrases.
5. Length: 3–5 sentences maximum. No padding.
6. Include placeholder fields in square brackets for personal details the founder must fill in: [Company Name], [Your Name], [Brief Product Description].
7. Do not use bullet points, headers, or line breaks. Output a single paragraph of flowing prose.`;

  const userPrompt = `The founder's answers:
${answersNarrative}.

The fund's standard positioning: "${fundDescription}"

Write the personalised pitch now.`;

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 300,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    const script =
      message.content[0].type === "text" ? message.content[0].text : "";

    return Response.json({ script });
  } catch (err) {
    console.error("Anthropic API error:", err);
    return Response.json(
      { error: "Failed to generate script. Please try again." },
      { status: 502 }
    );
  }
}
