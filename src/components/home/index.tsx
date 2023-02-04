import { useTranslation } from "next-i18next";
export default function HomeComps() {
  const { t } = useTranslation("home");

  return (
    <div className="text-gray-700 font-semibold">
      <h1 className="mb-1 text-5xl text-black font-extrabold">{t("title")}</h1>
      <h2 className="mb-5 text-md">{t("subTitle")}</h2>
      <div className="mb-5">
        <q className="italic">{t("q1")}</q>
      </div>
      <div>{t("hello")}</div>
      <p className="mb-2">{t("p1")}</p>
      <div className="text-sm font-normal">{t("div1")}</div>
      <div className="text-sm font-normal">{t("div2")}</div>
    </div>
  );
}
