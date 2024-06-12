import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchAllResults } from "@/fetchers";
import { useQuery } from "@tanstack/react-query";

export function ResultTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["results"],
    queryFn: fetchAllResults,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError || !data) return <div>Error fetching data</div>;

  return (
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
        {data.map(
          ({ id, allIndiaRank, applicationNumber, candidateName, marks }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell>{applicationNumber}</TableCell>
              <TableCell>{candidateName}</TableCell>
              <TableCell>{allIndiaRank}</TableCell>
              <TableCell>{marks}</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
}
