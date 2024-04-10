"use client";

import { useFetchCities } from "@/app/hooks/citiesData";
import Tile from "@/app/components/tile";
import { useFiltersContext } from "@/app/contexts";

export default function TileGrid() {
  const { search } = useFiltersContext();

  const { data, isLoading } = useFetchCities(search);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || data.length === 0) {
    return <span>No results found</span>;
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {data.map((city, i) => (
        <Tile city={city} key={`${city.name}_${i}`} />
      ))}
    </div>
  );
}
