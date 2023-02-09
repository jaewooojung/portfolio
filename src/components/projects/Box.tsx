import { CursorContext } from "@/context/cursor";
import clsx from "clsx";
import Image from "next/image";
import React, { useContext } from "react";
import { useState } from "react";
import { MyProject } from "./projects";
import Tag from "./Tag";

export default React.memo(function ProjectsBox({
  project,
  handleClickProject,
}: {
  project: MyProject;
  handleClickProject: (project: MyProject) => void;
}) {
  const { height, title, summary, thumbnail, technologies } = project;
  const { isScreenBelowLg, cursorAPI } = useContext(CursorContext);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);

  const onLoadingComplete = () => {
    setLoading(false);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    cursorAPI.scaleUpBorder();
  };
  const handleMouseLeave = () => {
    setHovered(false);
    cursorAPI.scaleDownBorder();
  };

  const pointerEvtProps = isScreenBelowLg
    ? {}
    : {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      };

  return (
    <div
      {...pointerEvtProps}
      onClick={() => handleClickProject(project)}
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{ height: `${height}px` }}
    >
      <div className="absolute inset-0">
        {thumbnail.startsWith("/images") ? (
          <Image
            alt={`${title}`}
            src={thumbnail}
            fill
            className={clsx("object-cover object-left", {
              "animate-pulse": loading,
            })}
            sizes="(min-width: 1024px) 50vw,
                100vw"
            // placeholder="blur"
            // blurDataURL={thumbnail}
            onLoadingComplete={onLoadingComplete}
          />
        ) : (
          <div className="w-full h-full">
            <video src={thumbnail} className="w-full h-full object-cover" autoPlay muted loop />
          </div>
        )}

        <div
          style={{
            background:
              hovered || isScreenBelowLg
                ? "linear-gradient(rgba(20,20,20,0.2), 50%, rgba(20,20,20,20.8))"
                : "rgba(20,20,20,0.2)",
          }}
          className="absolute inset-0 flex items-end"
        >
          <div
            className={clsx("p-4 w-full text-white transition-all duration-300", {
              "opacity-100 translate-y-0": hovered || isScreenBelowLg,
              "opacity-0 translate-y-2": !(hovered || isScreenBelowLg),
            })}
          >
            <div className="text-2xl font-extrabold">{title}</div>
            <div className="mb-2">{summary}</div>
            <ul className="flex gap-2">
              {technologies.map((tech) => (
                <Tag key={`title ${tech}`} tech={tech} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
