import clsx from "clsx";

export default function Background() {
  return (
    <div
      className={clsx(
        "fixed inset-0 text-emerald-50 bg-background select-none",
        "dark:bg-zinc-900 dark:text-emerald-900 dark:text-opacity-20"
      )}
    >
      <div
        className={clsx(
          "hidden absolute left-0 w-full bottom-0 -translate-x-1/2 animate-slide-right-infinite",
          "lg:block"
        )}
      >
        <span className="text-9xl tracking-widest font-mono font-extrabold">JAEWOO JUNG</span>
      </div>
    </div>
  );
}
