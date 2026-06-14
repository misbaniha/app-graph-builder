import { useQuery } from "@tanstack/react-query";
import { getGraph } from "@/mocks/api";

export function useGraph(
  appId: string
) {
  return useQuery({
    queryKey: ["graph", appId],
    queryFn: () => getGraph(appId),
    enabled: !!appId,
  });
}