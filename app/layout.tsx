import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import LayoutProviders from "@/app/components/layoutProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Grid",
  description: "Created by kjesien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <LayoutProviders>{children}</LayoutProviders>
        </div>
      </body>
    </html>
  );
}
