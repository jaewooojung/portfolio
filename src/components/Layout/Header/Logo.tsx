import React from "react";
import { useCursorRef } from "@/utils/hooks/useCursorRef";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import clsx from "clsx";

export default React.memo(function Logo() {
  const { smoothRoute } = useSmoothRoute();
  const { scaleUpAndAbsorbColor, scaleDownAndResetBg } = useCursorRef();
  const isMobile = window.innerWidth < 640;
  const buttonProps = isMobile
    ? {}
    : {
        onMouseEnter: () => scaleUpAndAbsorbColor("bg-emerald-500"),
        onMouseLeave: scaleDownAndResetBg,
      };
  return (
    <div className="">
      <button
        onClick={() => smoothRoute("/")}
        className={clsx(
          "text-3xl font-extrabold text-emerald-500",
          "sm:text-5xl sm:hover:text-background",
          "dark:text-emerald-500"
        )}
        {...buttonProps}
      >
        JW.
      </button>
    </div>
  );
});
