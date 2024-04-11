export enum SortBy {
  Distance = "distance",
  Name = "name",
}

export interface Option<T extends string> {
  value: T;
  label: string;
}

export const sortByOptions: Option<SortBy>[] = [
  { value: SortBy.Distance, label: "Distance to Tel Aviv, ASC" },
  { value: SortBy.Name, label: "City Name, ASC" },
];
