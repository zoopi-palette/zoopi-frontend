import { useMutation, useQuery } from '@tanstack/react-query';

type Options = {
  refetchInterval?: number;
};

export const useGetRequest = (
  queryName: string[],
  queryFn: () => void,
  options?: Options
) => useQuery(queryName, queryFn, { ...options });

export const usePostRequest = (queryFn: () => Promise<any>) =>
  useMutation(queryFn);
