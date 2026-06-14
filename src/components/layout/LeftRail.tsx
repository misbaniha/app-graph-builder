import {
  Home,
  Layers,
  Settings,
} from "lucide-react";

export function LeftRail() {
  return (
    <aside className="w-16 border-r border-slate-700 bg-slate-900 flex flex-col items-center gap-6 py-4">
      <Home size={20} />
      <Layers size={20} />
      <Settings size={20} />
    </aside>
  );
}