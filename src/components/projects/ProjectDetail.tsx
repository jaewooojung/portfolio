import { MyProject } from "./projects";

export default function ProjectDetail({
  project,
  closeProjectDetail,
}: {
  project: MyProject;
  closeProjectDetail: () => void;
}) {
  return (
    <div className="fixed z-50 inset-0 flex justify-end">
      <div className="w-1/2 h-full bg-red-900"></div>
    </div>
  );
}
