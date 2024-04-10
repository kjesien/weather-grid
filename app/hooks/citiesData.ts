import useSWR from "swr";
import { CityData } from "@/app/models";

export const filterCitiesByActivity = (cities: CityData[]) => {
  return cities.filter(({ active }: CityData) => active);
};

export const filterCitiesBySearch =
  (search: string | undefined) => (cities: CityData[]) => {
    if (!search) {
      return cities;
    }
    console.log("search", search);
    return cities.filter(({ name, country }) =>
      `${name} ${country}`.toLowerCase().includes(search),
    );
  };

export async function fetchCities(
  search: string | undefined,
): Promise<CityData[]> {
  return fetch("data.json")
    .then((res): Promise<{ cities: CityData[] }> => res.json())
    .then(({ cities }) => cities)
    .then(filterCitiesByActivity)
    .then(filterCitiesBySearch(search));
}

export function useFetchCities(search: string | undefined) {
  return useSWR(`getCities:${search}`, () => fetchCities(search));
}
