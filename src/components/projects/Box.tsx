import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { MyProject } from "./projects";

export default React.memo(function ProjectsBox({ project }: { project: MyProject }) {
  const { height, title, summary, thumbnail, description, technologies, url, githubUrl } = project;
  const [loading, setLoading] = useState(true);
  const onLoadingComplete = () => {
    setLoading(false);
  };
  return (
    <div className="relative rounded-xl overflow-hidden" style={{ height: `${height}px` }}>
      <div className="absolute inset-0">
        <Image
          alt={`${title}`}
          src={thumbnail}
          fill
          className={clsx("object-cover bg-opacity-50", {
            "animate-pulse": loading,
          })}
          sizes="(min-width: 1024px) 50vw,
                100vw"
          placeholder="blur"
          blurDataURL={thumbnail}
          onLoadingComplete={onLoadingComplete}
        />
        <div className="absolute inset-0 bg-opacity-30 bg-zinc-600"></div>
        <div>content</div>
      </div>
    </div>
  );
});
