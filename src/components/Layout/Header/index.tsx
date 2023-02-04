import clsx from "clsx";
import { useCallback, useState } from "react";
import { useCursorRef } from "@/utils/hooks/useCursorRef";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import { useRouter } from "next/router";
import LocaleButton from "./LocaleButton";
import DarkmodeToggle from "./DarkmodeToggle";

const routes = ["about", "projects", "contact"];

export default function LayoutHeader() {
  const [mouseEntered, setMouseEntered] = useState("");
  const router = useRouter();
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
    <header className="py-10 w-full h-52 flex justify-between items-center">
      <div
        onClick={() => smoothRoute("/")}
        onMouseEnter={() => scaleUpAndAbsorbColor("bg-amber-900")}
        onMouseLeave={scaleDownAndResetBg}
        className="text-amber-900 hover:text-white"
      >
        <a className="text-5xl font-bold cursor-pointer">JW.</a>
      </div>
      <nav className="h-1/4 flex gap-12 text-lg font-semibold">
        <ul className="h-full flex gap-12">
          {routes.map((route) => (
            <li
              key={route}
              onClick={() => smoothRoute(`/${route}`)}
              onMouseEnter={() => handleMouseEnter(route)}
              onMouseLeave={handleMouseLeave}
              className="relative flex items-center"
            >
              <a className="text-gray-400">{route.slice(0, 1).toUpperCase() + route.slice(1)}</a>
              <div
                className={clsx("absolute bottom-0 w-full h-[3px] bg-gray-400 transition-transform", {
                  "scale-100": mouseEntered === route || router.pathname === `/${route}`,
                  "scale-0": !(mouseEntered === route || router.pathname === `/${route}`),
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
    </header>
  );
}
