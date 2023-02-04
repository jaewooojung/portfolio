import clsx from "clsx";

export default function Background() {
  return (
    <div className={clsx("-z-10 fixed inset-0 text-emerald-50 bg-background select-none", "dark:bg-zinc-900")}>
      <div className="absolute left-0 w-full bottom-0 -translate-x-1/2 animate-slide-right-infinite">
        <span className="text-9xl tracking-widest font-mono font-extrabold">JAEWOO JUNG</span>
      </div>
    </div>
  );
}
