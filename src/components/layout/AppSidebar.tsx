import { useApps } from "@/hooks/useApps";
import { useUIStore } from "@/store/uiStore";

export function AppSidebar() {
  const { data, isLoading } = useApps();

  const selectedAppId = useUIStore(
    (state) => state.selectedAppId
  );

  const setSelectedApp = useUIStore(
    (state) => state.setSelectedApp
  );

  return (
    <aside className="w-64 border-l border-slate-700 bg-slate-900 p-4">
      <h2 className="font-semibold mb-4">
        Applications
      </h2>

      {isLoading && <p>Loading...</p>}

      {data?.map((app) => (
        <div
          key={app.id}
          onClick={() =>
            setSelectedApp(app.id)
          }
          className={`border border-slate-700 rounded p-2 mb-2 cursor-pointer transition
            ${
              selectedAppId === app.id
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800"
            }`}
        >
          {app.name}
        </div>
      ))}
    </aside>
  );
}