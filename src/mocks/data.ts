import type { GraphEdge, GraphNode } from "@/types/graph";

export const apps = [
  {
    id: "app-1",
    name: "supertokens-golang",
  },
  {
    id: "app-2",
    name: "supertokens-java",
  },
  {
    id: "app-3",
    name: "supertokens-python",
  },
];

export const graphData: Record<
  string,
  {
    nodes: GraphNode[];
    edges: GraphEdge[];
  }
> = {
  "app-1": {
    nodes: [
      {
        id: "service",
        position: { x: 100, y: 100 },
        data: {
          name: "Service",
          status: "healthy",
          value: 50,
        },
      },
      {
        id: "postgres",
        position: { x: 450, y: 100 },
        data: {
          name: "Postgres",
          status: "healthy",
          value: 60,
        },
      },
      {
        id: "redis",
        position: { x: 250, y: 300 },
        data: {
          name: "Redis",
          status: "degraded",
          value: 40,
        },
      },
    ],
    edges: [
      {
        id: "e1",
        source: "service",
        target: "postgres",
      },
      {
        id: "e2",
        source: "service",
        target: "redis",
      },
    ],
  },

  "app-2": {
    nodes: [
      {
        id: "gateway",
        position: { x: 100, y: 100 },
        data: {
          name: "Gateway",
          status: "healthy",
          value: 70,
        },
      },
      {
        id: "mysql",
        position: { x: 450, y: 100 },
        data: {
          name: "MySQL",
          status: "healthy",
          value: 55,
        },
      },
    ],
    edges: [
      {
        id: "e3",
        source: "gateway",
        target: "mysql",
      },
    ],
  },

  "app-3": {
    nodes: [
      {
        id: "python-api",
        position: { x: 100, y: 100 },
        data: {
          name: "Python API",
          status: "healthy",
          value: 80,
        },
      },
      {
        id: "mongo",
        position: { x: 450, y: 100 },
        data: {
          name: "MongoDB",
          status: "degraded",
          value: 30,
        },
      },
      {
        id: "queue",
        position: { x: 250, y: 300 },
        data: {
          name: "RabbitMQ",
          status: "healthy",
          value: 90,
        },
      },
    ],
    edges: [
      {
        id: "e4",
        source: "python-api",
        target: "mongo",
      },
      {
        id: "e5",
        source: "python-api",
        target: "queue",
      },
    ],
  },
};