import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { PageTitle } from "../reuse/common";
import LinkButton from "../reuse/LinkButton";
import AboutSection from "./Section";

export default function AboutComps() {
  const { t } = useTranslation("about");
  return (
    <div>
      <PageTitle title={t("title")} />
      <AboutSection
        title={t("s1Title")}
        content={
          <ul>
            <li>{t("s1Content1")}</li>
          </ul>
        }
      />
      <AboutSection
        title={t("s2Title")}
        linkIcon={<LinkButton title={t("s2ProjectLink")} path="/projects" />}
        content={
          <ul className="flex flex-col gap-2">
            <li>
              <div>{t("s2Li1Title")}</div>
              <div>{t("s2Li1Content")}</div>
            </li>
            <li>
              <div>{t("s2Li2Title")}</div>
              <div>{t("s2Li2Content")}</div>
            </li>
            <li>
              <div>{t("s2Li3Title")}</div>
              <div>{t("s2Li3Content")}</div>
            </li>
            <li>
              <div>{t("s2Li4Title")}</div>
              <div>{t("s2Li4Content")}</div>
            </li>
            <li>
              <div>{t("s2Li5Title")}</div>
              <div>{t("s2Li5Content")}</div>
            </li>
          </ul>
        }
      />
      <AboutSection title={t("s3Title")} content={<div>{t("s3Content")}</div>} />
      <AboutSection
        title={t("s4Title")}
        content={
          <ul className="flex flex-col gap-2">
            <li>
              <div>{t("s4Li1Title")}</div>
              <div>{t("s4Li2Content")}</div>
            </li>
            <li>
              <div>{t("s4Li2Title")}</div>
              <div>{t("s4Li2Content")}</div>
            </li>
            <li>
              <div>{t("s4Li3Title")}</div>
              <div>{t("s4Li3Content")}</div>
            </li>
            <li>
              <div>{t("s4Li4Title")}</div>
              <div>{t("s4Li4Content")}</div>
            </li>
            <li>
              <div>{t("s4Li5Title")}</div>
              <div>{t("s4Li5Content")}</div>
            </li>
          </ul>
        }
      />
    </div>
  );
}
