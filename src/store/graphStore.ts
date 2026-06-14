import { create } from "zustand";

import type {
  GraphNode,
  GraphEdge,
} from "@/types/graph";

interface GraphState {
  nodes: GraphNode[];
  edges: GraphEdge[];

  setGraph: (
    nodes: GraphNode[],
    edges: GraphEdge[]
  ) => void;

  deleteNode: (
    nodeId: string
  ) => void;

  updateNodeValue: (
    nodeId: string,
    value: number
  ) => void;
}

export const useGraphStore =
  create<GraphState>((set) => ({
    nodes: [],
    edges: [],

    setGraph: (
      nodes,
      edges
    ) =>
      set({
        nodes,
        edges,
      }),

    deleteNode: (
      nodeId
    ) =>
      set((state) => ({
        nodes: state.nodes.filter(
          (node) =>
            node.id !== nodeId
        ),

        edges: state.edges.filter(
          (edge) =>
            edge.source !== nodeId &&
            edge.target !== nodeId
        ),
      })),

    updateNodeValue: (
      nodeId,
      value
    ) =>
      set((state) => ({
        nodes: state.nodes.map(
          (node) =>
            node.id === nodeId
              ? {
                  ...node,
                  data: {
                    ...node.data,
                    value,
                  },
                }
              : node
        ),
      })),
  }));