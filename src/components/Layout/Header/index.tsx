import clsx from "clsx";
import { useCallback, useState } from "react";
import { useCursorRef } from "@/utils/hooks/useCursorRef";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import { useRouter } from "next/router";
import LocaleButton from "./LocaleButton";
import DarkmodeToggle from "./DarkmodeToggle";
import NavHorizontal from "./NavHorizontal";
import NavMobile from "./NavMobile";

const tabs = ["about", "projects", "contact"];

export default function LayoutHeader() {
  return (
    <header className={clsx("w-full h-20", "sm:h-28 lg:h-48 xl:h-52 2xl:h-60")}>
      <NavHorizontal tabs={tabs} />
      <NavMobile tabs={tabs} />
    </header>
  );
}
