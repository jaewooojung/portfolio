import clsx from "clsx";
import Image from "next/image";
import { MyProject } from "./projects";

export default function ProjectDetail({
  project,
  closeProjectDetail,
}: {
  project: MyProject;
  closeProjectDetail: () => void;
}) {
  const { height, title, summary, thumbnail, description, technologies, url, githubUrl } = project;
  const handleClickOuter = closeProjectDetail;

  return (
    <article onClick={handleClickOuter} className="fixed inset-0 flex justify-end bg-black bg-opacity-80">
      <div onClick={(e) => e.stopPropagation()} className="w-1/2 h-full bg-red-900">
        <div className="flex flex-col">
          <div className="">{title}</div>
          <div className="">{summary}</div>
          <div className="relative flex justify-center">
            <div className="relative w-2/3 h-60">
              {thumbnail.startsWith("/images") ? (
                <Image
                  alt={`${title}`}
                  src={thumbnail}
                  fill
                  className={clsx("object-cover object-left-top")}
                  sizes="(min-width: 1024px) 50vw,
                        100vw"
                  // placeholder="blur"
                  // blurDataURL={thumbnail}
                />
              ) : (
                <video src={thumbnail} className="w-full h-full object-cover" autoPlay muted loop />
              )}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </article>
  );
}
