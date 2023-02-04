import { useCursorRef } from "@/utils/hooks/useCursorRef";
import clsx from "clsx";

export default function Cursor() {
  const { cursorRef } = useCursorRef();
  return (
    <div ref={cursorRef} className={clsx("hidden fixed w-12 h-12 justify-center items-center rounded-full", "sm:flex")}>
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
