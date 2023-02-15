import clsx from "clsx";
import React, { useContext } from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutMain from "./LayoutMain";
import LayoutFooter from "./LayoutFooter";
import { LAYOUT_FADE_DURATION } from "@/constant";
import { CommonContext } from "@/context/common";

export default React.memo(function Base({ children, openNav }: { children: React.ReactNode; openNav: () => void }) {
  const { layoutRef } = useContext(CommonContext);
  return (
    <div
      ref={layoutRef}
      style={{
        transitionDuration: `${LAYOUT_FADE_DURATION}ms`,
      }}
      className={clsx(
        "px-4 text-zinc-800 transition-opacity max-w-[1920px] min-h-screen opacity-100",
        "sm:px-10 lg:px-28 xl:px-32 2xl:px-60",
        "dark:text-zinc-400"
      )}
    >
      <LayoutHeader openNav={openNav} />
      <LayoutMain>{children}</LayoutMain>
      <LayoutFooter />
    </div>
  );
});
