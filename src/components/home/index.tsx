import clsx from "clsx";
import { useTranslation } from "next-i18next";
import AnimatedLink from "../reuse/AnimatedLink";

export default function HomeComps() {
  const { t } = useTranslation("home");
  return (
    <div className="relative font-semibold">
      <h1 className={clsx("mb-3 text-3xl font-extrabold", "lg:text-5xl 2xl:text-7xl")}>{t("title")}</h1>
      <h2 className="mb-5 ml-1 text-sm">{t("subTitle")}</h2>
      <div>{t("hello")}</div>
      <div>{t("div1")}</div>
      <hr className="my-4" />
      <div className="text-sm">{t("div3")}</div>
      <div className="text-sm">{t("div4")}</div>
      <hr className="my-4" />
      <div className="max-w-fit">
        <AnimatedLink title={t("button1")} path="/about" arrow={true} />
      </div>
    </div>
  );
}
