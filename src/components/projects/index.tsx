import clsx from "clsx";
import { useTranslation } from "next-i18next";
import ProjectsBox from "./Box";
import { PageTitle } from "../reuse/common";
import { getProjects } from "./datas";

export default function ProjectsComps() {
  const { t } = useTranslation("projects");
  const projectArr = getProjects(t);

  return (
    <div className={clsx("relative sm:px-20 md:px-30 lg:px-0")}>
      <PageTitle title="Projects" />
      <hr className="my-8" />
      <div className="text-sm font-semibold">
        <span className="mr-2">{t("portfolioRepo")}</span>
        <a
          href="https://github.com/sarada3/portfolio"
          target="_blank"
          rel="noreferrer"
          className="hover:underline underline-offset-4"
        >
          https://github.com/sarada3/portfolio
        </a>
      </div>
      <hr className="my-8" />
      <div className={clsx("w-full flex flex-col gap-8 animate-slide-up-fade-in", "lg:flex-row")}>
        <div className={clsx("w-full flex flex-col gap-8", "lg:gap-6")}>
          {projectArr.slice(0, 2).map((project) => (
            <ProjectsBox key={project.title} project={project} />
          ))}
        </div>
        <div className={clsx("w-full flex flex-col gap-8", "lg:gap-6")}>
          {projectArr.slice(2).map((project) => (
            <ProjectsBox key={project.title} project={project} />
          ))}
        </div>
      </div>
      {/* {selected && <ProjectDetail project={selected} closeProjectDetail={closeProjectDetail} />} */}
    </div>
  );
}
