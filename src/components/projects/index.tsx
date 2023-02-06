import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { PageTitle } from "../reuse/common";
import LinkButton from "../reuse/LinkButton";

export default function ProjectsComps() {
  const { t } = useTranslation("projects");
  return (
    <div>
      <PageTitle title="Projects" />
      <div className="w-full flex flex-wrap">
        <div className="bg-red-500 w-1/2 h-32">1</div>
        <div className="bg-green-500 w-1/2 h-64">2</div>
        <div className="bg-blue-500 h-32">3</div>
      </div>
    </div>
  );
}
