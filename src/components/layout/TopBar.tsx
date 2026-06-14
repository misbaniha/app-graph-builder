import { useUIStore } from "@/store/uiStore";

export function TopBar() {
  const triggerFitView =
    useUIStore(
      (state) =>
        state.triggerFitView
    );

  return (
    <header className="h-14 border-b border-slate-700 bg-slate-900 flex items-center justify-between px-4">
      <h1 className="font-semibold text-lg">
        Ainyx App Graph Builder
      </h1>

      <div className="flex gap-2">
        <button
          onClick={triggerFitView}
          className="border border-slate-700 rounded px-3 py-1"
        >
          Fit View
        </button>

        <button className="border border-slate-700 rounded px-3 py-1">
          Settings
        </button>
      </div>
    </header>
  );
}