"use client";
import Search from "@/app/components/search";
import SortSelect from "@/app/components/sortSelect";
import { SortBy, sortByOptions } from "@/app/models";
import { useAppDispatch, useAppSelector } from "@/app/hooks/store";
import {
  selectSearch,
  selectSortBy,
  setSearch,
  setSortBy,
} from "@/app/store/filtersSlice";
import { useMemo } from "react";

export default function Filters() {
  const search = useAppSelector(selectSearch);
  const sortBy = useAppSelector(selectSortBy);
  const dispatch = useAppDispatch();

  const onSearchChange = (search: string | undefined) =>
    dispatch(setSearch(search));

  const onSortByChange = (sortBy: string | undefined) =>
    dispatch(setSortBy(sortBy as SortBy));

  const sortByInitialValue = useMemo(
    () => sortByOptions.find(({ value }) => value === sortBy),
    [sortBy],
  );

  return (
    <div className="m-4 p-4 w-full flex justify-end gap-10">
      <Search
        placeholder="Search for location"
        onChange={onSearchChange}
        initialValue={search}
      />
      <SortSelect
        options={sortByOptions}
        onChange={onSortByChange}
        initialValue={sortByInitialValue}
        placeholder="Sort by"
      />
    </div>
  );
}
