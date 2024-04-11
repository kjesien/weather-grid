"use client";
import Image from "next/image";
import {
  Coordinates,
  CurrentWeatherDataParameters,
  unitSystemToUnitMap,
} from "@/app/models";
import { useFetchWeatherDetails } from "@/app/hooks/weatherDetails";
import { useMemo } from "react";

export default function WeatherDetails({
  coordinates,
  unitSystem,
}: {
  coordinates: Coordinates;
  unitSystem: Exclude<CurrentWeatherDataParameters["units"], undefined>;
}) {
  const { data: weatherData, isLoading } = useFetchWeatherDetails(
    coordinates,
    unitSystem,
  );

  const units = useMemo(() => unitSystemToUnitMap[unitSystem], [unitSystem]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!weatherData) {
    return <span>No data!</span>;
  }

  return (
    <div className="flex flex-col items-center justify-start p-6 border-2 rounded-lg bg-blue-900">
      <div className="h-full p-2 border-2 rounded-lg bg-gray-600/50">
        <table className="table-auto">
          <tbody>
            <tr>
              <td>Temperature</td>
              <td>
                {weatherData.main.temp} {units.temp}
              </td>
            </tr>
            <tr>
              <td>Felt temperature</td>
              <td>
                {weatherData.main.feels_like} {units.temp}
              </td>
            </tr>
            <tr>
              <td>Conditions</td>
              <td>
                <table className="table-auto table-nested">
                  <tbody>
                    {weatherData.weather.map((cond) => (
                      <tr key={cond.id}>
                        <td>{cond.description}</td>
                        <td>
                          <Image
                            className="border-2 border-blue-300 rounded"
                            src={`https://openweathermap.org/img/wn/${cond.icon}.png`}
                            alt={cond.main}
                            aria-label={cond.main}
                            width={35}
                            height={35}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{weatherData.main.pressure} hPa</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{weatherData.main.humidity} %</td>
            </tr>
            <tr>
              <td>Visibility</td>
              <td>{(weatherData.visibility / 1000).toFixed(2)} km</td>
            </tr>
            <tr>
              <td>Wind speed</td>
              <td>
                {weatherData.wind.speed} {units.speed}
              </td>
            </tr>
            <tr>
              <td>Cloudiness</td>
              <td>{weatherData.clouds.all} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
