"use client";
import { useFiltersContext } from "@/app/contexts";
import Search from "@/app/components/search";
import SortSelect from "@/app/components/sortSelect";
import { SortBy, sortByOptions } from "@/app/models";

export default function Filters() {
  const { setSearch, search, setSortBy, sortBy } = useFiltersContext();

  return (
    <div className="m-4 p-4 w-full flex justify-end gap-10">
      <Search
        placeholder="Search for location"
        onChange={setSearch}
        initialValue={search}
      />
      <SortSelect
        options={sortByOptions}
        onChange={(sortSelection) => setSortBy(sortSelection as SortBy)}
        initialValue={sortByOptions.find(({ value }) => value === sortBy)}
        placeholder="Sort by"
      />
    </div>
  );
}
