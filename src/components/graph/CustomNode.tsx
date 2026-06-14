import { Handle, Position } from "reactflow";

export function CustomNode({
  data,
}: {
  data: {
    label: string;
  };
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 min-w-[180px] text-center shadow-lg">
      <Handle
        type="target"
        position={Position.Top}
      />

      <div className="font-medium text-white">
        {data.label}
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
}