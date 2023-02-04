import clsx from "clsx";
import NavHorizontal from "./NavHorizontal";
import NavMobile from "./NavMobile";

const tabs = ["about", "projects", "contact"];

export default function LayoutHeader() {
  return (
    <header className={clsx("relative w-full h-20", "sm:h-28 lg:h-48 xl:h-52 2xl:h-56")}>
      <NavHorizontal tabs={tabs} />
      <NavMobile tabs={tabs} />
    </header>
  );
}
