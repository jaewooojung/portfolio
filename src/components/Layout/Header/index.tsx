import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { useCursorRef } from "@/utils/hooks/useCursorRef";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import { useRouter } from "next/router";
import Link from "next/link";
import LocaleButton from "./LocaleButton";
import useDarkmodeRef from "@/utils/hooks/useDarkmodeRef";
import DarkmodeToggle from "./DarkmodeToggle";

const routes = ["about", "projects", "contact"];

export default function LayoutHeader() {
  const [mouseEntered, setMouseEntered] = useState("");
  const router = useRouter();
  const { scaleUpCursor, scaleDownCursor } = useCursorRef();
  const { smoothRoute } = useSmoothRoute();

  const localeTo = router.locales!.find((locale) => locale !== router.locale) as string;

  const handleMouseEnter = useCallback(
    (route: string) => {
      setMouseEntered(route);
      scaleUpCursor();
    },
    [scaleUpCursor]
  );

  const handleMouseLeave = useCallback(() => {
    setMouseEntered("none");
    scaleDownCursor();
  }, [scaleDownCursor]);

  return (
    <header className="py-10 w-full h-40 flex justify-between items-center">
      <a
        onClick={() => smoothRoute("/")}
        onMouseEnter={scaleUpCursor}
        onMouseLeave={scaleDownCursor}
        className="text-5xl font-bold"
      >
        JW
      </a>
      <nav className="flex items-center gap-24 text-lg font-semibold">
        <ul className="flex gap-12">
          {routes.map((route) => (
            <li
              key={route}
              onMouseEnter={() => handleMouseEnter(route)}
              onMouseLeave={handleMouseLeave}
              className="w-full"
            >
              <a onClick={() => smoothRoute(`/${route}`)} className="text-gray-400">
                {route.slice(0, 1).toUpperCase() + route.slice(1)}
              </a>
              <div
                className={clsx("w-full h-[2px] bg-gray-400 scale-0 transition", {
                  "scale-100": mouseEntered === route || router.pathname === `/${route}`,
                })}
              ></div>
            </li>
          ))}
        </ul>
        <DarkmodeToggle />
        <LocaleButton localeTo={localeTo} asPath={router.asPath} />
      </nav>
    </header>
  );
}
