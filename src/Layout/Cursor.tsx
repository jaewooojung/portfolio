import clsx from "clsx";
import { useContext } from "react";
import { CursorContext } from "@/context/cursor";

export default function Cursor() {
  const { cursorRef } = useContext(CursorContext);
  return (
    <div
      ref={cursorRef}
      className={clsx(
        "hidden fixed w-12 h-12 justify-center items-center rounded-full pointer-events-none",
        "lg:-top-full lg:-left-full lg:flex"
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 border border-zinc-500 rounded-full transition-transform",
          "dark:border-zinc-400"
        )}
      ></div>
      <div
        className={clsx("w-full h-full rounded-full bg-zinc-500 scale-[0.1] transition-all", "dark:bg-zinc-500")}
      ></div>
    </div>
  );
}
