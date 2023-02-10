import clsx from "clsx";
import React from "react";

export default function LayoutMain({ children }: { children: React.ReactNode }) {
  console.log("LayoutMain");
  return (
    <main className={clsx("relative pt-8 pb-14", "lg:px-16 xl:px-32 2xl:px-40 lg:pt-10 lg:pb-16")}>{children}</main>
  );
}
