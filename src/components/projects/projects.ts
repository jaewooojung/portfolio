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
      thumbnail: "/videos/thumbnail-felix.mp4",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 260,
      title: "Guplay",
      summary: "Guplay summary",
      thumbnail: "/images/thumbnail-guplay.png",
      description: "Guplay description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 260,
      title: "Ipad",
      summary: "Ipad summary",
      thumbnail: "/images/thumbnail-ipad.png",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 340,
      title: "Awesome shaders",
      summary: "Awesome shaders",
      thumbnail: "/videos/thumbnail-awesomeShaders.mp4",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
  ];
}
