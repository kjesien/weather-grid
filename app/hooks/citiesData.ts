import { CityData, SortBy } from "@/app/models";
import {
  filterCitiesByActivity,
  filterCitiesBySearch,
  sortCitiesBy,
} from "@/app/utils";
import useSWRImmutable from "swr/immutable";

export async function fetchCities(
  search: string | undefined,
  sortBy: SortBy | undefined,
): Promise<CityData[]> {
  return fetch("data.json")
    .then((res): Promise<{ cities: CityData[] }> => res.json())
    .then(({ cities }) => cities)
    .then(filterCitiesByActivity())
    .then(filterCitiesBySearch(search))
    .then(sortCitiesBy(sortBy));
}

export function useFetchCities(
  search: string | undefined,
  sortBy: SortBy | undefined,
) {
  return useSWRImmutable(`getCities:${search}:${sortBy}`, () =>
    fetchCities(search, sortBy),
  );
}
