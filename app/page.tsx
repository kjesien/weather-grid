"use client";
import TileGrid from "@/app/components/tileGrid";
import Filters from "@/app/components/filters";
import { FiltersContextProvider } from "@/app/contexts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <FiltersContextProvider>
        <Filters />
        <TileGrid />
      </FiltersContextProvider>
    </main>
  );
}
