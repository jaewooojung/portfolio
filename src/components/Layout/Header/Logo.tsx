import React, { useContext } from "react";
import useSmoothPush from "@/utils/hooks/useSmoothPush";
import clsx from "clsx";
import { CursorContext } from "@/context/cursor";

export default React.memo(function Logo() {
  const { smoothPush } = useSmoothPush();
  const { isScreenBelowLg, cursorAPI } = useContext(CursorContext);

  const buttonProps = isScreenBelowLg
    ? {}
    : {
        onMouseEnter: () => cursorAPI.scaleUpAndAbsorbColor("bg-emerald-500"),
        onMouseLeave: cursorAPI.scaleDownAndResetBg,
      };
  return (
    <div>
      <a
        onClick={() => smoothPush("/")}
        className={clsx("text-3xl font-extrabold text-emerald-500 lg:hover:text-background", "sm:text-5xl")}
        {...buttonProps}
      >
        JW
      </a>
    </div>
  );
});
