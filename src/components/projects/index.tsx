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
