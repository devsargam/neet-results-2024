import { create } from "zustand";

interface SearchState {
  keyword: string;
  update: (newKeyword: string) => void;
}

export const useSearchState = create<SearchState>()((set) => ({
  keyword: "",
  update: (newKeyword) => set({ keyword: newKeyword }),
}));
