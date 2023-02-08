import { CursorContext } from "@/context/cursor";
import clsx from "clsx";
import Image from "next/image";
import React, { useContext } from "react";
import { useState } from "react";
import { MyProject } from "./projects";
import Tag from "./Tag";

export default React.memo(function ProjectsBox({ project }: { project: MyProject }) {
  const { height, title, summary, thumbnail, description, technologies, url, githubUrl } = project;
  const { cursorAPI } = useContext(CursorContext);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);

  const onLoadingComplete = () => {
    setLoading(false);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    // cursorAPI.absorbColorToBg("bg-transparnet");
    cursorAPI.scaleUpBorder();
  };
  const handleMouseLeave = () => {
    setHovered(false);
    cursorAPI.scaleDownBorder();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        console.log("click box");
      }}
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{ height: `${height}px` }}
    >
      <div className="absolute inset-0">
        <Image
          alt={`${title}`}
          src={thumbnail}
          fill
          className={clsx("object-cover", {
            "animate-pulse": loading,
          })}
          sizes="(min-width: 1024px) 50vw,
                100vw"
          // placeholder="blur"
          // blurDataURL={thumbnail}
          onLoadingComplete={onLoadingComplete}
        />
        <div
          style={hovered ? { background: "linear-gradient(rgba(0,0,0,0.25), 50%, rgba(0,0,0,0.65))" } : undefined}
          className={clsx("absolute inset-0 flex items-end", {
            "bg-black bg-opacity-20": !hovered,
          })}
        >
          <div
            className={clsx("p-4 w-full text-white transition-all", {
              "opacity-100 translate-y-0": hovered,
              "opacity-0 translate-y-10": !hovered,
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
        {/* {hovered && <div className="absolute inset-0 bg-black bg-opacity-20"></div>} */}

        {/* {hovered ? (
          <div
            style={{ background: "linear-gradient(rgba(0,0,0,0.35), 50%, rgba(0,0,0,0.75))" }}
            className="absolute inset-0 flex items-end"
          >
            <div className="p-4 w-full text-white translate-y-10 animate-slide-up-fade-in">
              <div className="text-2xl font-extrabold">{title}</div>
              <div className="mb-2">{summary}</div>
              <ul className="flex gap-2">
                {technologies.map((tech) => (
                  <Tag key={`title ${tech}`} tech={tech} />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        )} */}
      </div>
    </div>
  );
});
