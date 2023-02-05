import { useCursorRef } from "@/utils/hooks/useCursorRef";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import clsx from "clsx";
import router, { useRouter } from "next/router";
import { useCallback, useState } from "react";
import DarkmodeToggle from "./DarkmodeToggle";
import LocaleButton from "./LocaleButton";
import Logo from "./Logo";

export default function NavHorizontal({ tabs }: { tabs: Array<string> }) {
  const [mouseEntered, setMouseEntered] = useState("");
  const { scaleUpBorder, scaleDownBorder, absorbColorToBg, resetBg, scaleUpAndAbsorbColor, scaleDownAndResetBg } =
    useCursorRef();
  const { smoothRoute } = useSmoothRoute();
  const router = useRouter();
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
        "hidden h-1/4 text-lg font-semibold",
        "sm:w-full sm:h-full sm:flex sm:justify-between sm:items-center sm:gap-12 2xl:gap-16"
      )}
    >
      <Logo />
      <ul className="flex gap-12">
        {tabs.map((tab) => (
          <li key={tab} className="relative">
            <button
              onClick={() => smoothRoute(`/${tab}`)}
              onMouseEnter={() => handleMouseEnter(tab)}
              onMouseLeave={handleMouseLeave}
              className="h-full"
            >
              {tab.slice(0, 1).toUpperCase() + tab.slice(1)}
            </button>
            <div
              className={clsx("absolute bottom-0 w-full h-[3px] bg-gray-300 transition-transform select-none", {
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
