"use client";

import Link from "next/link";
import Tile from "@/app/components/tile";
import { useSelector } from "react-redux";
import { selectBaseCityInfo } from "@/app/store/detailsSlice";
import { redirect } from "next/navigation";
import { CityData } from "@/app/models";
import WeatherDetails from "@/app/components/weatherDetails";

export default function Details() {
  let cityInfo: CityData;

  try {
    cityInfo = useSelector(selectBaseCityInfo);
  } catch (err) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="px-8 py-8 w-full">
        <Link href="/" className="border-2 rounded-full py-1 px-2 text-sm">
          Go back
        </Link>
      </div>
      <div className=" flex flex-col items-center">
        <Tile city={cityInfo} />
        <WeatherDetails coordinates={cityInfo.coords} />
      </div>
    </main>
  );
}
