import { Search } from "@/components/search";
import { ResultTable } from "../components/result-table";

export function HomePage() {
  return (
    <main className="flex flex-col gap-6 items-center py-6">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
        Neet Results <span className="underline">2024</span>
      </h1>
      <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      {/* Search Box */}
      <Search />
      {/* Result Table */}
      <ResultTable />
    </main>
  );
}
