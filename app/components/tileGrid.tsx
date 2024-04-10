"use client";

import { useFetchCities } from "@/app/hooks/citiesData";
import Tile from "@/app/components/tile";

export default function TileGrid() {
  const { data, isLoading } = useFetchCities();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || data.length === 0) {
    return <span>No results found</span>;
  }

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {data.map((city) => (
        <Tile city={city} key={city.name} />
      ))}
    </div>
  );
}
