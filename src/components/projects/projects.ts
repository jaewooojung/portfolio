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
      summary: t("project1.summary"),
      thumbnail: "/videos/thumbnail-felix.mp4",
      description: t("project1.description"),
      technologies: ["react", "styled-component"],
      url: "https://sarada3.github.io/felix/",
      githubUrl: "https://github.com/sarada3/felix",
    },
    {
      height: 260,
      title: "Guplay",
      summary: t("project2.summary"),
      thumbnail: "/images/thumbnail-guplay.png",
      description: t("project2.description"),
      technologies: ["react", "firebase", "styled-component"],
      url: "https://guplay-22ced.web.app/",
      githubUrl: "https://github.com/sarada3/guplay",
    },
    {
      height: 260,
      title: "Ipad",
      summary: t("project3.summary"),
      thumbnail: "/images/thumbnail-ipad.png",
      description: t("project3.description"),
      technologies: ["three", "lit", "tailwind"],
      url: "https://ipad-v2-9x19ji089-jewoo25.vercel.app/",
      githubUrl: "https://github.com/sarada3/ipad-v2",
    },
    {
      height: 340,
      title: "Awesome shaders",
      summary: t("project4.summary"),
      thumbnail: "/videos/thumbnail-awesomeShaders.mp4",
      description: t("project4.description"),
      technologies: ["three", "gsap"],
      url: "https://awesome-shaders.vercel.app/",
      githubUrl: "https://github.com/sarada3/awesome-shaders",
    },
  ];
}
