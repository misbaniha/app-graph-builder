import { TopBar } from "@/components/layout/TopBar";
import { LeftRail } from "@/components/layout/LeftRail";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { GraphCanvas } from "@/components/graph/GraphCanvas";
import { NodeInspector } from "@/components/inspector/NodeInspector";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <LeftRail />

        <main className="flex-1">
          <GraphCanvas />
        </main>

        <div className="hidden lg:flex">
  <NodeInspector />
  <AppSidebar />
</div>
      </div>
    </div>
  );
}

export default App;