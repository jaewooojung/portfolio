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
      height: 320,
      title: "Felix",
      summary: "Felix summary",
      thumbnail: "https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 200,
      title: "Green fox",
      summary: "Felix summary",
      thumbnail: "https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 280,
      title: "Solar system",
      summary: "Felix summary",
      thumbnail: "https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 250,
      title: "Ipad",
      summary: "Felix summary",
      thumbnail: "https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 190,
      title: "Awesome shaders",
      summary: "Felix summary",
      thumbnail: "https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
    {
      height: 360,
      title: "Guplay",
      summary: "Felix summary",
      thumbnail: "https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg",
      description: "Felix description",
      technologies: ["React", "firebase"],
      url: "https://google.com",
      githubUrl: "https://google.com",
    },
  ];
}
