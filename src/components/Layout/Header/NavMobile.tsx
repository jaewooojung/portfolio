import useSmoothPush from "@/utils/hooks/useSmoothPush";
import clsx from "clsx";
import { NextRouter, useRouter } from "next/router";
import { useCallback, useState } from "react";
import { NavProps } from ".";
import DarkmodeToggleButton from "./DarkmodeToggleButton";
import LocaleButton from "./LocaleButton";
import Logo from "./Logo";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-full h-full"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function NavMobile(props: NavProps) {
  const { tabs, router, smoothPush } = props;
  const [open, setOpen] = useState(false);

  const toggleHamburgur = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <nav className={clsx("relative h-full flex justify-between items-center", "lg:hidden")}>
      <Logo />
      <button onClick={toggleHamburgur} className="relative z-20 w-5 h-5">
        {open ? (
          <CloseIcon />
        ) : (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="w-full h-[3px] rounded-xl bg-zinc-500"></div>
            <div className="w-full h-[3px] rounded-xl bg-zinc-500"></div>
            <div className="w-full h-[3px] rounded-xl bg-zinc-500"></div>
          </div>
        )}
      </button>
      <div
        className={clsx(
          "fixed inset-0 z-10 pt-20 bg-background transition-transform translate-x-full",
          "dark:bg-zinc-900",
          {
            "translate-x-0": open,
          }
        )}
      >
        <ul className="relative mb-10 w-full flex flex-col items-center gap-10 text-xl font-bold">
          <li
            key="home"
            className={clsx("underline-offset-8", {
              underline: router.pathname === "/",
            })}
          >
            <a onClick={() => smoothPush("/")}>HOME</a>
          </li>
          {tabs.map((tab) => (
            <li
              key={tab}
              className={clsx("underline-offset-8", {
                underline: router.pathname.slice(1) === tab,
              })}
            >
              <a onClick={() => smoothPush(`/${tab}`)}>{tab.toUpperCase()}</a>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center gap-20">
          <LocaleButton toggleHamburgur={toggleHamburgur} />
          <DarkmodeToggleButton />
        </div>
      </div>
    </nav>
  );
}
