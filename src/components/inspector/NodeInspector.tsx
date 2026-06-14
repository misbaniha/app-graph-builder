import { useUIStore } from "@/store/uiStore";

import { useGraphStore } from "@/store/graphStore";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export function NodeInspector() {
  const selectedNodeId = useUIStore(
    (state) => state.selectedNodeId
  );

  
  const deleteNode = useGraphStore(
  (state) => state.deleteNode
);

const updateNodeValue =
  useGraphStore(
    (state) =>
      state.updateNodeValue
  );

const setSelectedNode = useUIStore(
  (state) => state.setSelectedNode
);

  const nodes = useGraphStore(
  (state) => state.nodes
);

const node = nodes.find(
  (n) => n.id === selectedNodeId
);

  if (!selectedNodeId || !node) {
    return (
      <div className="w-80 border-l p-4">
        Select a node
      </div>
    );
  }

  return (
    <div className="w-80 border-l p-4">
      <h2 className="font-semibold mb-4">
        {node.data.name}
      </h2>

      <Tabs defaultValue="config">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="config">
            Config
          </TabsTrigger>

          <TabsTrigger value="runtime">
            Runtime
          </TabsTrigger>
        </TabsList>

        <TabsContent value="config">
          <div className="space-y-4 mt-4">
            <div>
              <label className="text-sm block mb-1">
                Name
              </label>

              <input
                className="w-full border rounded p-2"
                value={node.data.name}
                readOnly
              />
            </div>

            <div>
              <label className="text-sm block mb-2">
                Value
              </label>

              <Slider
  value={[node.data.value]}
  max={100}
  step={1}
  onValueChange={([value]) =>
    updateNodeValue(
      node.id,
      value
    )
  }
/>

            <div className="mt-3">
  <input
    type="number"
    min={0}
    max={100}
    value={node.data.value}
    onChange={(e) =>
      updateNodeValue(
        node.id,
        Number(e.target.value)
      )
    }
    className="w-full border rounded p-2 bg-slate-800"
  />
</div>
            </div>

            <Button
  variant="destructive"
  className="w-full bg-red-600 hover:bg-red-700 text-white"
  onClick={() => {
    deleteNode(node.id);
    setSelectedNode(null);
  }}
>
  Delete Node
</Button>
          </div>
        </TabsContent>

        <TabsContent value="runtime">
          <div className="space-y-4 mt-4">
            <div>
              <strong>Status:</strong>

              <div className="mt-2">
                <Badge
                  variant={
                    node.data.status === "healthy"
                      ? "default"
                      : "destructive"
                  }
                >
                  {node.data.status}
                </Badge>
              </div>
            </div>

            <div>
              <strong>Runtime Value:</strong>

              <div className="mt-2 text-lg">
                {node.data.value}
              </div>
            </div>

            <div>
              <strong>Node ID:</strong>

              <div className="mt-1 text-sm text-gray-500">
                {node.id}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}