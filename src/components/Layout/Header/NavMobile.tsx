import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import DarkmodeToggle from "./DarkmodeToggle";
import LocaleButton from "./LocaleButton";

export default function NavMobile({ tabs }: { tabs: Array<string> }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { smoothRoute } = useSmoothRoute();
  const toggleHamburgur = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className={clsx("h-full flex justify-between items-center", "sm:hidden")}>
      <div onClick={() => smoothRoute("/")} className="text-amber-900">
        <a className="text-4xl font-serif font-extrabold">JW.</a>
      </div>
      <div onClick={toggleHamburgur} className="z-10 w-5 h-5">
        {open ? (
          "x"
        ) : (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full h-[3px] rounded-xl bg-gray-600"></div>
            <div className="w-full h-[3px] rounded-xl bg-gray-600"></div>
            <div className="w-full h-[3px] rounded-xl bg-gray-600"></div>
          </div>
        )}
      </div>
      <div
        className={clsx("fixed inset-0 pt-20 bg-background transition-transform translate-x-full", {
          "translate-x-0": open,
        })}
      >
        <ul className="mb-10 w-full flex flex-col items-center gap-10 text-xl font-bold">
          <li
            onClick={() => smoothRoute("/")}
            key="home"
            className={clsx("underline-offset-8", {
              underline: router.pathname === "/",
            })}
          >
            HOME
          </li>
          {tabs.map((tab) => (
            <li
              onClick={() => smoothRoute(`/${tab}`)}
              key={tab}
              className={clsx("underline-offset-8", {
                underline: router.pathname.slice(1) === tab,
              })}
            >
              {tab.toUpperCase()}
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center gap-20">
          <LocaleButton />
          <DarkmodeToggle />
        </div>
      </div>
    </nav>
  );
}
