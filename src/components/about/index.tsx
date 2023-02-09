import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { PageTitle } from "../reuse/common";
import LinkButton from "../reuse/LinkButton";
import AboutSection from "./Section";

export default function AboutComps() {
  const { t } = useTranslation("about");
  return (
    <div className="relative">
      <PageTitle title="About me" />
      <AboutSection
        title={t("section1.title")}
        content={
          <ul>
            <li>{t("section1.description")}</li>
          </ul>
        }
      />
      <AboutSection
        title={t("section2.title")}
        linkIcon={<LinkButton title={t("section2.projectLink")} path="/projects" />}
        content={
          <ul className="flex flex-col gap-2">
            <li>
              <div>{t("section2.li1.title")}</div>
              <div>{t("section2.li1.description")}</div>
            </li>
            <li>
              <div>{t("section2.li2.title")}</div>
              <div>{t("section2.li2.description")}</div>
            </li>
            <li>
              <div>{t("section2.li3.title")}</div>
              <div>{t("section2.li3.description")}</div>
            </li>
            <li>
              <div>{t("section2.li4.title")}</div>
              <div>{t("section2.li4.description")}</div>
            </li>
            <li>
              <div>{t("section2.li5.title")}</div>
              <div>{t("section2.li5.description")}</div>
            </li>
          </ul>
        }
      />
      <AboutSection title={t("section3.title")} content={<div>{t("section3.description")}</div>} />
      <AboutSection
        title={t("section4.title")}
        content={
          <ul className="flex flex-col gap-2">
            <li>
              <div>{t("section4.li1.title")}</div>
              <div>{t("section4.li1.description")}</div>
            </li>
            <li>
              <div>{t("section4.li2.title")}</div>
              <div>{t("section4.li2.description")}</div>
            </li>
            <li>
              <div>{t("section4.li3.title")}</div>
              <div>{t("section4.li3.description")}</div>
            </li>
            <li>
              <div>{t("section4.li4.title")}</div>
              <div>{t("section4.li4.description")}</div>
            </li>
            <li>
              <div>{t("section4.li5.title")}</div>
              <div>{t("section4.li5.description")}</div>
            </li>
          </ul>
        }
      />
    </div>
  );
}
