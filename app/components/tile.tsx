import { CityData } from "@/app/models";

export default function Tile({ city }: { city: CityData }) {
  return (
    <div
      style={{ backgroundImage: `url(${city.image})` }}
      className={`m-4 p-4 border-2 rounded-lg h-64 w-64 bg-cover`}
    >
      <div className="h-full p-2 border-2 rounded-lg bg-gray-600/50">
        <div className="pb-2">
          <span className="text-lg">{city.name}</span>
          {", "}
          <span>{city.country}</span>
        </div>
        <div>
          <span className="text-sm">{city.description}</span>
        </div>
      </div>
    </div>
  );
}
