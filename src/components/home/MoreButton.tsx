import { useCursorRef } from "@/utils/hooks/useCursorRef";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import clsx from "clsx";
import { useTranslation } from "next-i18next";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

export default function MoreButton() {
  const { t } = useTranslation("home");
  const { scaleUpAndAbsorbColor, scaleDownAndResetBg } = useCursorRef();
  const { smoothRoute } = useSmoothRoute();
  const isMobile = window.innerWidth < 640;
  const buttonProps = isMobile
    ? {}
    : {
        onMouseEnter: () => scaleUpAndAbsorbColor("bg-emerald-500"),
        onMouseLeave: scaleDownAndResetBg,
      };
  return (
    <button
      onClick={() => smoothRoute("/about")}
      className={clsx("flex text-emerald-500", "sm:hover:text-background")}
      {...buttonProps}
    >
      <span className="mr-1">{t("button1")}</span> <ArrowRightIcon />
    </button>
  );
}
