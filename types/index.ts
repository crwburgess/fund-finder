export type NodeId = string;

export interface QuestionNode {
  id: NodeId;
  type: "question";
  question: string;
  options: {
    label: string;
    next: NodeId;
  }[];
}

export interface ResultNode {
  id: NodeId;
  type: "result";
  organisation: string;
  fund: string;
  description: string;
  url: string;
  /** Key vocabulary this agency values — passed to AI for outreach copy */
  agencyKeywords: string[];
}

export type TreeNode = QuestionNode | ResultNode;

export interface HistoryEntry {
  nodeId: NodeId;
  question: string;
  chosenLabel: string;
  chosenNext: NodeId;
}
