import type { Edge, Node } from "reactflow";

export type NodeStatus =
  | "healthy"
  | "degraded"
  | "down";

export interface ServiceNodeData {
  name: string;
  description?: string;

  status: NodeStatus;

  value: number;
}

export type GraphNode =
  Node<ServiceNodeData>;

export type GraphEdge = Edge;