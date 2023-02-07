import React, { useContext } from "react";
import useSmoothRoute from "@/utils/hooks/useSmoothRoute";
import clsx from "clsx";
import useCommonContext from "@/utils/hooks/useCommonConrtext";
import { ElementRefContext } from "@/context/elementRef";

export default React.memo(function Logo() {
  const { smoothRoute } = useSmoothRoute();
  const { cursorAPI } = useContext(ElementRefContext);
  const { isBelowLg } = useCommonContext();

  const buttonProps = isBelowLg
    ? {}
    : {
        onMouseEnter: () => cursorAPI.scaleUpAndAbsorbColor("bg-emerald-500"),
        onMouseLeave: cursorAPI.scaleDownAndResetBg,
      };
  return (
    <div>
      <a
        onClick={() => smoothRoute("/")}
        className={clsx("text-3xl font-extrabold text-emerald-500", "sm:text-5xl lg:hover:text-background")}
        {...buttonProps}
      >
        JW
      </a>
    </div>
  );
});
