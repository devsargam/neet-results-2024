/* eslint-disable @typescript-eslint/no-unused-vars */

import { fetchPaginatedResults } from "@/fetchers";
import { useSearchState } from "@/store/search";
import { useInfiniteQuery } from "@tanstack/react-query";
import useDebounce from "./use-debounce";

export function useInfiniteSearch() {
  const { keyword } = useSearchState();

  const debouncedSearchTerm = useDebounce(keyword);

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["results", debouncedSearchTerm],
      queryFn: fetchPaginatedResults,
      getNextPageParam: (lastPage, _) => lastPage.next,
      initialPageParam: 0,
    });

  return { data, isLoading, isError, fetchNextPage, hasNextPage };
}
