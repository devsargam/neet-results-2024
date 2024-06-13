import { useSearchState } from "@/store/search";
import { Input } from "./ui/input";

export function Search() {
  const { keyword, update } = useSearchState();

  return (
    <Input
      type="text"
      value={keyword}
      onChange={(e) => update(e.target.value)}
    />
  );
}
