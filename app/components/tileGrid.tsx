"use client";

import { useFetchCities } from "@/app/hooks/citiesData";
import Tile from "@/app/components/tile";
import { useAppDispatch, useAppSelector } from "@/app/hooks/store";
import { selectSearch, selectSortBy } from "@/app/store/filtersSlice";
import { setBaseCityInfo } from "@/app/store/detailsSlice";
import { CityData } from "@/app/models";
import { useRouter } from "next/navigation";

export default function TileGrid() {
  const search = useAppSelector(selectSearch);
  const sortBy = useAppSelector(selectSortBy);

  const { data, isLoading } = useFetchCities(search, sortBy);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const onTileClick = (city: CityData) => {
    dispatch(setBaseCityInfo(city));
    router.push("details");
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || data.length === 0) {
    return <span>No results found</span>;
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {data.map((city, i) => (
        <Tile city={city} onClick={onTileClick} key={`${city.name}_${i}`} />
      ))}
    </div>
  );
}
