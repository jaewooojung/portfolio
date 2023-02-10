import clsx from "clsx";
import React, { useContext } from "react";
import { CursorContext } from "@/context/cursor";
import useSmoothPush from "@/utils/hooks/useSmoothPush";

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

export default function AnimatedLink({
  title,
  path,
  arrow,
}: {
  title: React.ReactNode;
  path: string;
  arrow?: boolean;
}) {
  const { isScreenBelowLg, cursorAPI } = useContext(CursorContext);
  const { smoothPush } = useSmoothPush();

  const aProps = isScreenBelowLg
    ? {}
    : {
        onMouseEnter: () => cursorAPI.scaleUpAndAbsorbColor("bg-emerald-500"),
        onMouseLeave: cursorAPI.scaleDownAndResetBg,
      };

  return (
    <a
      onClick={() => smoothPush(path)}
      className={clsx("flex items-center text-emerald-500", "lg:hover:text-background")}
      href="#"
      {...aProps}
    >
      <span className="mr-1 font-semibold">{title}</span>
      {arrow && (
        <span className="w-6 h-6">
          <ArrowRightIcon />
        </span>
      )}
    </a>
  );
}
