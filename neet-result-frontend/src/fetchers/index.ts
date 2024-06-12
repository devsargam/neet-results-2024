import { IResult } from "@/interfaces/result";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export async function fetchAllResults(): Promise<IResult[]> {
  return (await axios.get(`${BASE_URL}/total`)).data.total ?? [];
}

export async function fetchPaginatedResults({
  pageParam = 0,
}: {
  pageParam?: number;
}): Promise<{
  results: IResult[];
  next: number | null;
}> {
  return (
    (await axios.get(`${BASE_URL}/results?skip=${pageParam}&limit=4`)).data ??
    []
  );
}
