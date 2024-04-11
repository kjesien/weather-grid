"use client";

import Link from "next/link";
import Tile from "@/app/components/tile";
import { useSelector } from "react-redux";
import { selectBaseCityInfo } from "@/app/store/detailsSlice";
import { redirect } from "next/navigation";
import { unitsSystemOptions } from "@/app/models";
import WeatherDetails from "@/app/components/weatherDetails";
import CustomSelect from "@/app/components/customSelect";
import { useState } from "react";

export default function Details() {
  const [units, setUnits] = useState(unitsSystemOptions[0].value);

  const cityInfo = useSelector(selectBaseCityInfo);

  if (!cityInfo) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="px-8 py-8 w-full flex justify-between">
        <Link href="/" className="border-2 rounded-full py-2 px-2 text-sm">
          Go back
        </Link>
        <CustomSelect
          id="units-select"
          options={unitsSystemOptions}
          initialValue={unitsSystemOptions[0]}
          onChange={(unit) => setUnits(unit ?? unitsSystemOptions[0].value)}
        />
      </div>
      <div className=" flex flex-col items-center">
        <Tile city={cityInfo} />
        <WeatherDetails coordinates={cityInfo.coords} unitSystem={units} />
      </div>
    </main>
  );
}
