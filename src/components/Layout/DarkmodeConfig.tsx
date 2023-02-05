import useCommonContext from "@/utils/hooks/useCommonConrtext";
import clsx from "clsx";

export default function DarkmodeConfig({ children }: { children: React.ReactNode }) {
  const { isDarkmode } = useCommonContext();
  return (
    <div
      className={clsx({
        dark: isDarkmode,
      })}
    >
      {children}
    </div>
  );
}
