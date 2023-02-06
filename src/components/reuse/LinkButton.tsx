import clsx from "clsx";
import useCommonContext from "@/utils/hooks/useCommonConrtext";
import { useCursorRef } from "@/utils/hooks/useCursorRef";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-full h-full"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function LinkButton({ title, path }: { title: string; path: string }) {
  const { scaleUpAndAbsorbColor, scaleDownAndResetBg } = useCursorRef();
  const { smoothRoute } = useSmoothRoute();
  const { isBelowLg } = useCommonContext();

  const buttonProps = isBelowLg
    ? {}
    : {
        onMouseEnter: () => scaleUpAndAbsorbColor("bg-emerald-500"),
        onMouseLeave: scaleDownAndResetBg,
      };

  return (
    <button
      onClick={() => smoothRoute(path)}
      className={clsx("flex text-emerald-500", "lg:hover:text-background")}
      {...buttonProps}
    >
      <span className="mr-1 font-semibold">{title}</span>
      <span className="w-6 h-6">
        <ArrowRightIcon />
      </span>
    </button>
  );
}
