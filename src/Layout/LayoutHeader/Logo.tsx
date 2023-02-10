import clsx from "clsx";
import React from "react";
import AnimatedLink from "@/components/reuse/AnimatedLink";

export default React.memo(function Logo() {
  return <AnimatedLink title={<span className={clsx("text-3xl font-extrabold", "sm:text-5xl")}>JW</span>} path="/" />;
});
