import { useQuery } from "@tanstack/react-query";
import { getApps } from "@/mocks/api";

export function useApps() {
  return useQuery({
    queryKey: ["apps"],
    queryFn: getApps,
  });
}