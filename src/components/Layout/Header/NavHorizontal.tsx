import { useCursorRef } from "@/utils/hooks/useCursorRef";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import clsx from "clsx";
import router from "next/router";
import { useCallback, useState } from "react";
import DarkmodeToggle from "./DarkmodeToggle";
import LocaleButton from "./LocaleButton";

export default function NavHorizontal({ tabs }: { tabs: Array<string> }) {
  const [mouseEntered, setMouseEntered] = useState("");
  const { scaleUpBorder, scaleDownBorder, absorbColorToBg, resetBg, scaleUpAndAbsorbColor, scaleDownAndResetBg } =
    useCursorRef();
  const { smoothRoute } = useSmoothRoute();
  const handleMouseEnter = useCallback(
    (route: string) => {
      setMouseEntered(route);
      scaleUpBorder();
    },
    [scaleUpBorder]
  );

  const handleMouseLeave = useCallback(() => {
    setMouseEntered("none");
    scaleDownBorder();
  }, [scaleDownBorder]);

  return (
    <nav
      className={clsx(
        "hidden h-1/4 text-lg font-semibold text-gray-500",
        "sm:w-full sm:h-full sm:flex sm:justify-between sm:items-center sm:gap-12 2xl:gap-24"
      )}
    >
      <div
        onClick={() => smoothRoute("/")}
        onMouseEnter={() => scaleUpAndAbsorbColor("bg-amber-900")}
        onMouseLeave={scaleDownAndResetBg}
        className="text-amber-900 hover:text-white"
      >
        <a className="text-5xl font-serif font-extrabold cursor-pointer">JW.</a>
      </div>
      <ul className="flex gap-12">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => smoothRoute(`/${tab}`)}
            onMouseEnter={() => handleMouseEnter(tab)}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center"
          >
            <a className="text-gray-400">{tab.slice(0, 1).toUpperCase() + tab.slice(1)}</a>
            <div
              className={clsx("absolute bottom-0 w-full h-[3px] bg-gray-400 transition-transform", {
                "scale-100": mouseEntered === tab || router.pathname === `/${tab}`,
                "scale-0": !(mouseEntered === tab || router.pathname === `/${tab}`),
              })}
            ></div>
          </li>
        ))}
      </ul>
      <div className="h-full flex items-center gap-6">
        <LocaleButton />
        <DarkmodeToggle />
      </div>
    </nav>
  );
}
