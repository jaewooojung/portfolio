import clsx from "clsx";
import Image from "next/image";

export function PageTitle({ title }: { title: string }) {
  return <h1 className={clsx("mb-10 text-2xl font-bold", "lg:text-4xl 2xl:text-6xl")}>{title}</h1>;
}
