import { ResultTable } from "../components/result-table";

export function HomePage() {
  return (
    <main className="flex flex-col gap-6 items-center">
      <h1 className="font-bold text-xl">Neet Results 2024</h1>
      <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      {/* Search Box */}
      {/* Result Table */}
      <ResultTable />
    </main>
  );
}
