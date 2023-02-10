import React, { useContext, useMemo } from "react";
import { useTranslation } from "next-i18next";
import AboutSection from "./Section";
import { PageTitle } from "../reuse/common";
import AnimatedLink from "../reuse/AnimatedLink";
import { CursorContext } from "@/context/cursor";
import { ProjectAPIContext } from "@/context/project";
import { getProjects } from "../projects/datas";

function SubTitle({ children }: { children: React.ReactNode }) {
  return <div className="font-semibold">{children}</div>;
}

function SubDescription({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}

export default function AboutComps() {
  const { t } = useTranslation("about");
  const { t: projectT } = useTranslation("projects");
  const { openProjectDetail } = useContext(ProjectAPIContext);
  const { isScreenBelowLg, cursorAPI } = useContext(CursorContext);

  const handleClickProjectLink = useMemo(() => {
    const projectArr = getProjects(projectT);
    const [felix, guplay, ipad, awesomeShaders] = projectArr;
    return {
      ipad: () => openProjectDetail(ipad),
      guplay: () => openProjectDetail(guplay),
      awesomeShaders: () => openProjectDetail(awesomeShaders),
    };
  }, [openProjectDetail, projectT]);

  const linkProps = isScreenBelowLg
    ? {}
    : {
        onMouseEnter: () => cursorAPI.scaleUpBorder(),
        onMouseLeave: cursorAPI.scaleDownBorder,
      };
  return (
    <div className="relative leading-loose">
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
        linkIcon={<AnimatedLink title={t("section2.projectLink")} path="/projects" arrow={true} />}
        content={
          <ul className="flex flex-col gap-2">
            <li>
              <SubTitle>{t("section2.li1.title")}</SubTitle>
              <SubDescription>
                - {t("section2.li1.description1")}
                <a onClick={handleClickProjectLink.ipad} className="text-emerald-500" href="#" {...linkProps}>
                  {t("section2.li1.projectLink")}
                </a>
                {t("section2.li1.description2")}
              </SubDescription>
            </li>
            <li>
              <SubTitle>{t("section2.li2.title")}</SubTitle>
              <SubDescription>
                - {t("section2.li2.description1")}
                <a onClick={handleClickProjectLink.guplay} className="text-emerald-500" href="#" {...linkProps}>
                  {t("section2.li2.projectLink")}
                </a>
                {t("section2.li2.description2")}{" "}
              </SubDescription>
            </li>
            <li>
              <SubTitle>{t("section2.li3.title")}</SubTitle>
              <SubDescription>- {t("section2.li3.description")}</SubDescription>
            </li>
            <li>
              <SubTitle>{t("section2.li4.title")}</SubTitle>
              <SubDescription>- {t("section2.li4.description")}</SubDescription>
            </li>
            <li>
              <SubTitle>{t("section2.li5.title")}</SubTitle>
              <SubDescription>
                - {t("section2.li5.description1")}
                <a onClick={handleClickProjectLink.awesomeShaders} className="text-emerald-500" href="#" {...linkProps}>
                  {t("section2.li5.projectLink")}
                </a>
                {t("section2.li5.description2")}{" "}
              </SubDescription>
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
              <SubTitle>{t("section4.li1.title")}</SubTitle>
              <SubDescription>{t("section4.li1.description")}</SubDescription>
            </li>
            <li>
              <SubTitle>{t("section4.li2.title")}</SubTitle>
              <SubDescription>{t("section4.li2.description")}</SubDescription>
            </li>
            <li>
              <SubTitle>{t("section4.li3.title")}</SubTitle>
              <SubDescription>{t("section4.li3.description")}</SubDescription>
            </li>
            <li>
              <SubTitle>{t("section4.li4.title")}</SubTitle>
              <SubDescription>{t("section4.li4.description")}</SubDescription>
            </li>
            <li>
              <SubTitle>{t("section4.li5.title")}</SubTitle>
              <SubDescription>{t("section4.li5.description")}</SubDescription>
            </li>
          </ul>
        }
      />
    </div>
  );
}
