import useSmoothPush from "@/utils/hooks/useSmoothPush";
import clsx from "clsx";
import { useRouter } from "next/router";
import DarkmodeToggleButton from "./LayoutHeader/DarkmodeToggleButton";
import LocaleButton from "./LayoutHeader/LocaleButton";
import { tabs } from "./LayoutHeader";
import { GithubLink, FacebookLink } from "./SideBar";

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

export default function FullScreenNav({ navOpen, closeNav }: { navOpen: boolean; closeNav: () => void }) {
  const router = useRouter();
  const { smoothPush } = useSmoothPush();

  return (
    <div
      className={clsx(
        "fixed inset-0 px-4 bg-background transition-transform translate-x-full overflow-auto",
        "sm:px-10 lg:hidden",
        "dark:bg-zinc-900",
        {
          "translate-x-0": navOpen,
        }
      )}
    >
      <nav className="w-full h-full">
        <div className={clsx("w-full h-20 flex justify-end items-center", "sm:h-28 lg:h-48 xl:h-52 2xl:h-56")}>
          <button onClick={closeNav} className="w-7 h-7 text-zinc-500">
            <CloseIcon />
          </button>
        </div>
        <ul className="mb-10 w-full flex flex-col items-center gap-10 text-xl font-bold">
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
        <div className="pb-10 grid grid-rows-2 grid-cols-2 gap-x-4 gap-y-10 items-center">
          <div className="justify-self-end">
            <LocaleButton />
          </div>
          <div className="justify-self-start">
            <DarkmodeToggleButton fromMobileNav={true} />
          </div>
          <div className="justify-self-end">
            <div className="w-6 h-6">
              <GithubLink twColor="fill-zinc-800 dark:fill-zinc-400" />
            </div>
          </div>
          <div className="justify-self-start">
            <div className="w-7 h-7">
              <FacebookLink twColor="fill-zinc-800 dark:fill-zinc-400" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
