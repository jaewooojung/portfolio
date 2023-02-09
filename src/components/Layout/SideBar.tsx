import { CommonContext } from "@/context/common";
import { CursorContext } from "@/context/cursor";
import clsx from "clsx";
import { useContext } from "react";

export const FacebookLink = ({ twColor }: { twColor: string }) => (
  <a
    href="https://www.facebook.com/profile.php?id=100031434824203"
    target="_blank"
    rel="noreferrer"
    className={clsx(twColor, "lg:hover:fill-background")}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100%" height="100%">
      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
    </svg>
  </a>
);

export const GithubLink = ({ twColor }: { twColor: string }) => (
  <a
    href="https://github.com/sarada3"
    target="_blank"
    rel="noreferrer"
    className={clsx(twColor, "lg:hover:fill-background")}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  </a>
);

export default function SideBar() {
  const { cursorAPI } = useContext(CursorContext);
  const liProps = {
    onMouseEnter: () => cursorAPI.absorbColorToBg("bg-emerald-500"),
    onMouseLeave: cursorAPI.resetBg,
  };
  return (
    <aside className={clsx("hidden fixed bottom-0", "lg:block lg:left-14 xl:left-16 2xl:left-30")}>
      <div className="flex flex-col items-center">
        <ul className="mb-10 flex flex-col items-center gap-6">
          <li className="w-6 h-6" {...liProps}>
            <GithubLink twColor="fill-emerald-500" />
          </li>
          <li className="w-7 h-7" {...liProps}>
            <FacebookLink twColor="fill-emerald-500" />
          </li>
        </ul>
        <div className="w-1 h-32 bg-zinc-200 dark:bg-zinc-400"></div>
      </div>
    </aside>
  );
}
