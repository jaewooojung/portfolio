import { TFunction } from "next-i18next";

export type MyProject = {
  height: number;
  title: string;
  summary: string;
  thumbnail: string;
  description: string;
  technologies: Array<string>;
  url: string;
  githubUrl: string;
};

export function getProjects(t: TFunction): Array<MyProject> {
  return [
    {
      height: 340,
      title: "Felix",
      summary: "Felix summary",
      thumbnail: "/images/thumbnail-ipad.png",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 260,
      title: "Green fox",
      summary: "Felix summary",
      thumbnail: "/images/thumbnail-guplay.png",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 260,
      title: "Solar system",
      summary: "Felix summary",
      thumbnail: "/images/thumbnail-ipad.png",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 340,
      title: "Ipad",
      summary: "Felix summary",
      thumbnail: "/images/thumbnail-ipad.png",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
  ];
}
