import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { SortBy } from "@/app/models";

export interface WeatherState {
  search: string | undefined;
  sortBy: SortBy | undefined;
}

const initialState: WeatherState = {
  search: undefined,
  sortBy: undefined,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string | undefined>) {
      state.search = action.payload;
    },
    setSortBy(state, action: PayloadAction<SortBy | undefined>) {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearch, setSortBy } = filtersSlice.actions;

export const selectSearch = (state: RootState): string | undefined => {
  return state.filters.search;
};

export const selectSortBy = (state: RootState): SortBy | undefined => {
  return state.filters.sortBy;
};
