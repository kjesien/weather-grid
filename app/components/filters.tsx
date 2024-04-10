"use client";
import { useFiltersContext } from "@/app/contexts";
import Search from "@/app/components/search";

export default function Filters() {
  const { setSearch, search } = useFiltersContext();

  return (
    <div className="m-4 p-4">
      <Search onChange={setSearch} />
    </div>
  );
}
