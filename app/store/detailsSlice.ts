import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { CityData } from "@/app/models";

export interface DetailsState {
  baseCityInfo: CityData | undefined;
}

const initialState: DetailsState = {
  baseCityInfo: undefined,
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setBaseCityInfo(state, action: PayloadAction<CityData | undefined>) {
      state.baseCityInfo = action.payload;
    },
    clearDetails(state) {
      state = initialState;
    },
  },
});

export const { setBaseCityInfo, clearDetails } = detailsSlice.actions;

export const selectBaseCityInfo = (state: RootState): CityData => {
  if (!state.details.baseCityInfo) {
    throw new Error("Base City Info is not in the store!");
  }
  return state.details.baseCityInfo;
};
