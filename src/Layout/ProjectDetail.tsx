import clsx from "clsx";
import Image from "next/image";
import { useCallback, useContext, useEffect } from "react";
import { ProjectAPIContext } from "@/context/project";
import { MyProject } from "../components/projects/datas";
import Tag from "../components/projects/Tag";

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={4}
    stroke="currentColor"
    className="w-full h-full"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-1 text-lg font-semibold">{children}</div>
);
const SubDescription = ({ children }: { children: React.ReactNode }) => <div className="mb-8 text-sm">{children}</div>;

export default function ProjectDetail({ project }: { project: MyProject }) {
  const { closeProjectDetail } = useContext(ProjectAPIContext);
  const { height, title, summary, thumbnail, description, technologies, url, githubUrl } = project;

  return (
    <article onClick={closeProjectDetail} className="fixed inset-0 flex justify-end bg-black bg-opacity-80">
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx(
          "p-4 w-full h-full bg-background overflow-auto translate-x-full animate-project-detail-slide-left",
          "sm:p-6 sm:w-1/2 lg:p-12 lg:w-1/2 2xl:w-1/3",
          "dark:bg-zinc-900"
        )}
      >
        <div className="flex flex-col">
          <div className="mb-8 pb-4 border-b-2 border-b-zinc-500">
            <button
              onClick={closeProjectDetail}
              className="p-1 w-6 h-6 border-2 rounded-full border-zinc-500 text-zinc-500"
            >
              <ChevronLeftIcon />
            </button>
          </div>
          <div className="mb-1 text-2xl font-extrabold">{title}</div>
          <SubDescription>{summary}</SubDescription>
          <div className={clsx("mb-8 relative w-full shrink-0 self-center rounded-xl overflow-hidden")}>
            {thumbnail.startsWith("/images") ? (
              <Image
                alt={`${title}`}
                src={thumbnail}
                width={window.innerWidth}
                height={window.innerHeight / 2}
                className={clsx("object-cover object-left-top")}
                sizes="(min-width: 1024px) 50vw,
                        100vw"
                placeholder="blur"
                blurDataURL={thumbnail}
              />
            ) : (
              <video src={thumbnail} className="w-full h-full object-cover" autoPlay playsInline muted loop />
            )}
          </div>
          <SubTitle>About</SubTitle>
          <SubDescription>{description}</SubDescription>
          <SubTitle>Technologies</SubTitle>
          <SubDescription>
            <ul className="flex gap-2">
              {technologies.map((tech) => (
                <Tag key={`${title}-${tech}-detail`} tech={tech} />
              ))}
            </ul>
          </SubDescription>
          <SubTitle>URL</SubTitle>
          <SubDescription>
            <a href={url} target="_blank" rel="noreferrer" className="font-bold">
              {url}
            </a>
          </SubDescription>
          <SubTitle>Github</SubTitle>
          <SubDescription>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="font-bold">
              {githubUrl}
            </a>
          </SubDescription>
        </div>
      </div>
    </article>
  );
}
