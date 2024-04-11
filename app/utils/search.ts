import { CityData } from "@/app/models";

export const filterCitiesByActivity =
  () =>
  (cities: CityData[]): CityData[] => {
    return cities.filter(({ active }: CityData) => active);
  };

export const filterCitiesBySearch =
  (search: string | undefined) =>
  (cities: CityData[]): CityData[] => {
    if (!search) {
      return cities;
    }
    return cities.filter(({ name, country }) =>
      `${name} ${country}`.toLowerCase().includes(search),
    );
  };
