// "use client";

import Navbar from "@/components/Navbar";
import ProgressBar from "next-nprogress-bar";
import { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Yu Jie's Dev Portfolio",
  description:
    "Welcome to the portfolio of Yu Jie, a full-stack developer based in Singapore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* ProgressBar component from https://github.com/Skyleen77/next-nprogress-bar */}
        {/* <ProgressBar
          height="4px"
          color="#fffd00"
          options={{ showSpinner: false }}
          shallowRouting
          appDirectory
        /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
