import { apps, graphData } from "./data";

const delay = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

export async function getApps() {
  await delay(800);

  return apps;
}

export async function getGraph(
  appId: string
) {
  await delay(1000);

  const graph = graphData[appId];

  if (!graph) {
    throw new Error(
      "Graph not found"
    );
  }

  return graph;
}