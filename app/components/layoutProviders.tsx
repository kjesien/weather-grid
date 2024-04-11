"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "@/app/store/store";

export default function LayoutProviders({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <Provider store={store}>{children}</Provider>;
}
