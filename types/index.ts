export type NodeId = string;

export interface QuestionNode {
  id: NodeId;
  type: "question";
  question: string;
  questionGa?: string;
  options: {
    label: string;
    labelGa?: string;
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
  agencyKeywords: string[];
}

export type TreeNode = QuestionNode | ResultNode;

export interface HistoryEntry {
  nodeId: NodeId;
  question: string;
  chosenLabel: string;
  chosenNext: NodeId;
}
