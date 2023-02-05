import clsx from "clsx";
import { useTranslation } from "next-i18next";
import MoreButton from "./MoreButton";

export default function HomeComps() {
  const { t } = useTranslation("home");
  return (
    <div className="font-semibold">
      <h1 className={clsx("mb-3 text-3xl font-extrabold", "sm:text-5xl")}>{t("title")}</h1>
      <h2 className="mb-5 ml-1 text-sm">{t("subTitle")}</h2>
      <p className="mb-5">
        <q className="">{t("q1")}</q>
        <br />
        <span className="">{t("span1")}</span>
      </p>
      <div>{t("hello")}</div>
      <p className="mb-2">{t("p1")}</p>
      <br />
      <hr />
      <br />
      <div className="text-sm">{t("div1")}</div>
      <div className="text-sm">{t("div2")}</div>
      <br />
      <hr />
      <br />
      <MoreButton />
    </div>
  );
}
