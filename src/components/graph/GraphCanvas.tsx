import { CustomNode } from "./CustomNode";
import {
  useEffect,
} from "react";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

import { useUIStore } from "@/store/uiStore";
import { useGraphStore } from "@/store/graphStore";

import { useGraph } from "@/hooks/useGraph";
const nodeTypes = {
  custom: CustomNode,
};

export function GraphCanvas() {
  const selectedAppId = useUIStore(
    (state) => state.selectedAppId
  );

  const setSelectedNode = useUIStore(
    (state) => state.setSelectedNode
  );

  const { data, isLoading } =
    useGraph(selectedAppId);

  const {
    nodes,
    edges,
    setGraph,
  } = useGraphStore();

  useEffect(() => {
    if (data) {
      setGraph(
        data.nodes,
        data.edges
      );
    }
  }, [data, setGraph]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        Loading graph...
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height:
          "calc(100vh - 56px)",
      }}
    >
      <ReactFlow
      nodeTypes={nodeTypes}
        nodes={nodes.map(
  (node) => ({
    ...node,
    type: "custom",
    data: {
      label:
        node.data.name,
    },
  })
)}
        edges={edges.map((edge) => ({
  ...edge,
  animated: true,
  style: {
    stroke: "#64748b",
    strokeWidth: 2,
  },
}))}
        fitView
        onNodeClick={(
          _,
          node
        ) =>
          setSelectedNode(
            node.id
          )
        }
      >
        <Background gap={24} size={1} />
        <Controls
  showInteractive={false}
/>
        <MiniMap
  zoomable
  pannable
  nodeColor="#475569"
  maskColor="rgba(15,23,42,0.7)"
/>
      </ReactFlow>
    </div>
  );
}