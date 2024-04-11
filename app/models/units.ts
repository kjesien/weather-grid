import { Option } from "@/app/models/sortBy";
import { CurrentWeatherDataParameters } from "@/app/models/weatherDetails";

export const unitsSystemOptions: Option<
  Exclude<CurrentWeatherDataParameters["units"], undefined>
>[] = [
  { value: "metric", label: "Metric" },
  { value: "imperial", label: "Imperial" },
];

export const unitSystemToUnitMap: Record<
  Exclude<CurrentWeatherDataParameters["units"], undefined>,
  { temp: string; speed: string }
> = {
  metric: { temp: "°C", speed: "m/s" },
  imperial: { temp: "°F", speed: "fs/s" },
  standard: { temp: "°C", speed: "m/s" },
};
