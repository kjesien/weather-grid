"use client";

import TileGrid from "@/app/components/tileGrid";
import Filters from "@/app/components/filters";
import { useAppDispatch } from "@/app/hooks/store";
import { clearDetails } from "@/app/store/detailsSlice";

export default function Home() {
  const dispatch = useAppDispatch();

  dispatch(clearDetails());

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Filters />
      <TileGrid />
    </main>
  );
}
