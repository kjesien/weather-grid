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

export const TEL_AVIV_COORDINATES: Coordinates = {
  lat: 32.109333,
  lng: 34.855499,
};
