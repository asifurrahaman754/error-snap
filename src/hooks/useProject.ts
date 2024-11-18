import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { project } from "types/project";
import { apiClient } from "utils/axios";

export const key = "single-project";

const useProject = (
  projectId: string,
  initialized = true,
  options?: Partial<UseQueryOptions<project>>
) => {
  const data = useQuery({
    queryKey: [key, projectId],
    queryFn: async (): Promise<project> => {
      const response = await apiClient.get(`/project/${projectId}`);
      return response.data?.data;
    },
    enabled: initialized,
    ...options,
  });

  return data;
};

export default useProject;
