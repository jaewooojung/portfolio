import React from "react";
import { useCursorRef } from "@/utils/hooks/useCursorRef";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import clsx from "clsx";
import useCommonContext from "@/utils/hooks/useCommonConrtext";

export default React.memo(function Logo() {
  const { smoothRoute } = useSmoothRoute();
  const { scaleUpAndAbsorbColor, scaleDownAndResetBg } = useCursorRef();
  const { isBelowLg } = useCommonContext();

  const buttonProps = isBelowLg
    ? {}
    : {
        onMouseEnter: () => scaleUpAndAbsorbColor("bg-emerald-500"),
        onMouseLeave: scaleDownAndResetBg,
      };
  return (
    <div>
      <button
        onClick={() => smoothRoute("/")}
        className={clsx("text-3xl font-extrabold text-emerald-500", "sm:text-5xl lg:hover:text-background")}
        {...buttonProps}
      >
        JW.
      </button>
    </div>
  );
});