import {
  Coordinates,
  CurrentWeatherDataParameters,
  CurrentWeatherDataResponse,
} from "@/app/models";
import { getApiKey } from "@/app/utils/apiKey";
import useSWR from "swr";

async function fetchCurrentWeatherData(
  { lat, lng }: Coordinates,
  units: Exclude<CurrentWeatherDataParameters["units"], undefined>,
): Promise<CurrentWeatherDataResponse> {
  const params = {
    appid: getApiKey(),
    lat: lat.toString(),
    lon: lng.toString(),
    units,
  } satisfies CurrentWeatherDataParameters;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?${new URLSearchParams(
      params,
    )}`,
  );

  if (!res.ok) {
    throw new Error("Error occurred during data fetch");
  }

  return res.json();
}

export function useFetchWeatherDetails(
  coords: Coordinates,
  measureSystem: Exclude<CurrentWeatherDataParameters["units"], undefined>,
) {
  return useSWR(
    `getWeatherDetails:${coords.lat}:${coords.lng}:${measureSystem}`,
    () => fetchCurrentWeatherData(coords, measureSystem),
  );
}
