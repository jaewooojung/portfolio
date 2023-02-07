import clsx from "clsx";
import { useContext } from "react";
import { CursorContext } from "@/context/cursor";

export default function Cursor() {
  const { cursorRef } = useContext(CursorContext);
  return (
    <div
      ref={cursorRef}
      className={clsx(
        "hidden fixed w-12 h-12 justify-center items-center rounded-full",
        "lg:-top-full lg:-left-full lg:flex"
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 border border-gray-400 rounded-full transition-transform",
          "dark:border-zinc-400"
        )}
      ></div>
      <div
        className={clsx("w-full h-full rounded-full bg-gray-400 scale-[0.1] transition-all", "dark:bg-zinc-400")}
      ></div>
    </div>
  );
}
