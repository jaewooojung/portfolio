import { useCursorRef } from "@/utils/hooks/useCursorRef";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import DarkmodeToggleButton from "./DarkmodeToggleButton";
import LocaleButton from "./LocaleButton";
import Logo from "./Logo";

export default function NavHorizontal({ tabs }: { tabs: Array<string> }) {
  const [mouseEntered, setMouseEntered] = useState("");
  const { scaleUpBorder, scaleDownBorder } = useCursorRef();
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
        "lg:w-full lg:h-full lg:flex lg:justify-between lg:items-center lg:gap-12"
      )}
    >
      <Logo />
      <ul className="flex gap-12 xl:gap-16 2xl:gap-24">
        {tabs.map((tab) => (
          <li key={tab} className="relative">
            <a
              onClick={() => smoothRoute(`/${tab}`)}
              onMouseEnter={() => handleMouseEnter(tab)}
              onMouseLeave={handleMouseLeave}
              className="h-full"
            >
              {tab.slice(0, 1).toUpperCase() + tab.slice(1)}
            </a>
            <div
              className={clsx("absolute bottom-0 w-full h-[2px] bg-emerald-500 transition-transform select-none", {
                "scale-100": mouseEntered === tab || router.pathname === `/${tab}`,
                "scale-0": !(mouseEntered === tab || router.pathname === `/${tab}`),
              })}
            ></div>
          </li>
        ))}
      </ul>
      <div className="h-full flex items-center gap-6">
        <LocaleButton />
        <DarkmodeToggleButton />
      </div>
    </nav>
  );
}
