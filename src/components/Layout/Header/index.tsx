import useSmoothPush from "@/utils/hooks/useSmoothPush";
import clsx from "clsx";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import NavHorizontal from "./NavHorizontal";
import NavMobile from "./NavMobile";

const tabs = ["about", "projects", "contact"];

export interface NavProps {
  tabs: Array<string>;
  router: NextRouter;
  smoothPush: (value: string) => void;
}

export default function LayoutHeader() {
  const router = useRouter();
  const { smoothPush } = useSmoothPush();

  useEffect(() => {
    ["/", ...tabs].forEach((path) => {
      router.prefetch(path);
    });
  }, []);

  return (
    <header className={clsx("relative w-full h-20", "sm:h-28 lg:h-48 xl:h-52 2xl:h-56")}>
      <NavHorizontal tabs={tabs} router={router} smoothPush={smoothPush} />
      <NavMobile tabs={tabs} router={router} smoothPush={smoothPush} />
    </header>
  );
}
