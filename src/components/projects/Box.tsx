import { MyProject } from "./projects";

export default function ProjectsBox({ project }: { project: MyProject }) {
  const { height, title, summary, thumbnail, description, technologies, url, githubUrl } = project;
  return (
    <div className="bg-red-900 rounded-lg" style={{ height: `${height}px` }}>
      1
    </div>
  );
}
