import useDarkmodeRef from "@/utils/hooks/useDarkmodeRef";
import clsx from "clsx";

export default function DarkmodeConfig({ children }: { children: React.ReactNode }) {
  const { darkmodeRef } = useDarkmodeRef();

  let isDark = false;
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDark = true;
  }

  return (
    <div
      ref={darkmodeRef}
      className={clsx({
        dark: isDark,
      })}
    >
      {children}
    </div>
  );
}
