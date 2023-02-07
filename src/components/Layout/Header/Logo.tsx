import React, { useContext } from "react";
import useSmoothPush from "@/utils/hooks/useSmoothPush";
import clsx from "clsx";
import { CursorContext } from "@/context/cursor";
import { CommonContext } from "@/context/common";

export default React.memo(function Logo() {
  const { smoothPush } = useSmoothPush();
  const { cursorAPI } = useContext(CursorContext);
  const { isBelowLg } = useContext(CommonContext);

  const buttonProps = isBelowLg
    ? {}
    : {
        onMouseEnter: () => cursorAPI.scaleUpAndAbsorbColor("bg-emerald-500"),
        onMouseLeave: cursorAPI.scaleDownAndResetBg,
      };
  return (
    <div>
      <a
        onClick={() => smoothPush("/")}
        className={clsx("text-3xl font-extrabold text-emerald-500", "sm:text-5xl lg:hover:text-background")}
        {...buttonProps}
      >
        JW
      </a>
    </div>
  );
});
