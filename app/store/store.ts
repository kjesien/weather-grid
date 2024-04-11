import { configureStore } from "@reduxjs/toolkit";
import { detailsSlice } from "./detailsSlice";
import { filtersSlice } from "@/app/store/filtersSlice";

export const store = configureStore({
  reducer: {
    [detailsSlice.name]: detailsSlice.reducer,
    [filtersSlice.name]: filtersSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
