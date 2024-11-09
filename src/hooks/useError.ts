import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { errorLog } from "types/errorLog";
import { apiClient } from "utils/axios";

export const key = "single-error";

const useError = (
  id,
  initialized = true,
  options?: Partial<UseQueryOptions<errorLog>>
) => {
  const data = useQuery({
    queryKey: [key, id],
    queryFn: async (): Promise<errorLog> => {
      const response = await apiClient.get(`/errors/${id}`);
      return response.data?.data;
    },
    enabled: initialized,
    ...options,
  });

  return data;
};

export default useError;
