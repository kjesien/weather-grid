import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";

export const useAppDispatch: () => AppDispatch =
  useDispatch.withTypes<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector.withTypes<RootState>();
