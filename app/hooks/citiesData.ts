import useSWR from "swr";
import { CityData } from "@/app/models";

export async function fetchCities(): Promise<CityData[]> {
  return fetch("data.json")
    .then((res): Promise<{ cities: CityData[] }> => res.json())
    .then(({ cities }) => cities);
}

export function useFetchCities() {
  return useSWR(`getCities`, () => fetchCities());
}
