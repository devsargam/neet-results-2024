import { IResult } from "@/interfaces/result";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function fetchAllResults(): Promise<IResult[]> {
  return (await axios.get(`${BASE_URL}/total`)).data.total ?? [];
}

export async function fetchPaginatedResults({
  pageParam = 0,
  queryKey,
}: {
  pageParam: number;
  queryKey: string[];
}): Promise<{
  results: IResult[];
  next: number | null;
}> {
  const [, searchTerm] = queryKey;

  return (
    (
      await axios.get(
        `${BASE_URL}/results?skip=${pageParam}&limit=20&search=${searchTerm}`
      )
    ).data ?? []
  );
}
