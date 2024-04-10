export interface CityData {
  name: string;
  continent: string;
  active: boolean;
  country: string;
  description: string;
  image: string;
  coords: Coordinates;
}

export interface Coordinates {
  lat: number;
  lng: number;
}
