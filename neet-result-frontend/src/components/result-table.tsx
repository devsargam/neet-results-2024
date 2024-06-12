/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchPaginatedResults } from "@/fetchers";
import { Button } from "./ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment } from "react/jsx-runtime";

export function ResultTable() {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["results"],
      queryFn: fetchPaginatedResults,
      getNextPageParam: (lastPage, _) => lastPage.next,
      initialPageParam: 0,
    });

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) return <div>Error fetching data</div>;

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Application Number</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>AIR</TableHead>
            <TableHead>Marks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.pages.map(({ results }, i) => (
            <Fragment key={i}>
              {results.map(
                ({
                  id,
                  applicationNumber,
                  candidateName,
                  allIndiaRank,
                  marks,
                }) => (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{applicationNumber}</TableCell>
                    <TableCell>{candidateName}</TableCell>
                    <TableCell>{allIndiaRank}</TableCell>
                    <TableCell>{marks}</TableCell>
                  </TableRow>
                )
              )}
            </Fragment>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="default"
        onClick={() => {
          fetchNextPage();
        }}
        disabled={!hasNextPage}
      >
        Load more...
      </Button>
    </>
  );
}
