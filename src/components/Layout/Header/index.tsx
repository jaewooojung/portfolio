import { CursorContext } from "@/context/cursor";
import useSmoothPush from "@/utils/hooks/useSmoothPush";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import DarkmodeToggleButton from "./DarkmodeToggleButton";
import LocaleButton from "./LocaleButton";
import Logo from "./Logo";

export const tabs = ["about", "projects", "contact"];

export default function LayoutHeader({ openNav }: { openNav: () => void }) {
  const { cursorAPI } = useContext(CursorContext);
  const router = useRouter();
  const { smoothPush } = useSmoothPush();
  const [mouseEntered, setMouseEntered] = useState("");

  const handleMouseEnter = useCallback(
    (route: string) => {
      setMouseEntered(route);
      cursorAPI.scaleUpBorder();
    },
    [cursorAPI]
  );

  const handleMouseLeave = useCallback(() => {
    setMouseEntered("none");
    cursorAPI.scaleDownBorder();
  }, [cursorAPI]);

  useEffect(() => {
    ["/", ...tabs].forEach((path) => {
      router.prefetch(path);
    });
  }, []);

  return (
    <header className={clsx("relative w-full h-20 text-zinc-500", "sm:h-28 lg:h-48 xl:h-52 2xl:h-56")}>
      <nav className={clsx("h-full flex justify-between items-center text-lg font-semibold")}>
        <Logo />
        <div className={clsx("hidden", "lg:flex lg:gap-24")}>
          <ul className="flex gap-12 xl:gap-16 2xl:gap-24">
            {tabs.map((tab) => (
              <li key={tab} className="relative">
                <a
                  onClick={() => smoothPush(`/${tab}`)}
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
        </div>
        <div className={clsx("h-full flex items-center", "lg:hidden")}>
          <button onClick={openNav} className="relative w-5 h-5">
            <div className="w-full h-full flex flex-col justify-between">
              <div className="w-full h-[3px] rounded-xl bg-zinc-500"></div>
              <div className="w-full h-[3px] rounded-xl bg-zinc-500"></div>
              <div className="w-full h-[3px] rounded-xl bg-zinc-500"></div>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
