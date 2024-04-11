import {
  CityData,
  Coordinates,
  SortBy,
  TEL_AVIV_COORDINATES,
} from "@/app/models";

const distance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

const simpleComparator = (v1: number | string, v2: number | string) => {
  if (v1 < v2) {
    return -1;
  }
  if (v1 > v2) {
    return 1;
  }
  return 0;
};

const sortKeyToComparatorMap: Record<
  SortBy,
  () => Parameters<Array<CityData>["toSorted"]>[0]
> = {
  [SortBy.Name]: () => (c1: CityData, c2: CityData) =>
    simpleComparator(c1.name, c2.name),
  [SortBy.Distance]: () => {
    const alreadyCalculatedDistances = new Map<Coordinates, number>();
    return (c1: CityData, c2: CityData) => {
      let c1Dist = alreadyCalculatedDistances.get(c1.coords);
      if (!c1Dist) {
        c1Dist = distance(
          TEL_AVIV_COORDINATES.lat,
          TEL_AVIV_COORDINATES.lng,
          c1.coords.lat,
          c1.coords.lng,
        );
        alreadyCalculatedDistances.set(c1.coords, c1Dist);
      }
      let c2Dist = alreadyCalculatedDistances.get(c2.coords);
      if (!c2Dist) {
        c2Dist = distance(
          TEL_AVIV_COORDINATES.lat,
          TEL_AVIV_COORDINATES.lng,
          c2.coords.lat,
          c2.coords.lng,
        );
        alreadyCalculatedDistances.set(c2.coords, c2Dist);
      }
      return simpleComparator(c1Dist, c2Dist);
    };
  },
};

export const sortCitiesBy =
  (sortBy: SortBy | undefined) =>
  (cities: CityData[]): CityData[] => {
    if (!sortBy) {
      return cities;
    }
    return cities.toSorted(sortKeyToComparatorMap[sortBy]());
  };
