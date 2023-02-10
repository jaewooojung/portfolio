import { createContext, createRef, RefObject, useCallback, useMemo, useState } from "react";
import { MyProject } from "@/components/projects/projects";
import { activateBodyScroll, deActivateBodyScroll } from "../utils/dom";
import { noProviderHandler } from "@/utils/common";

interface IProject {
  project: MyProject | null;
}
interface IProjectAPI {
  openProjectDetail: (project: MyProject) => void;
  closeProjectDetail: () => void;
}

const initialState = {
  project: null,
};

const initialStateAPI = {
  openProjectDetail: () => noProviderHandler("common"),
  closeProjectDetail: () => noProviderHandler("common"),
};

export const ProjectContext = createContext<IProject>(initialState);
export const ProjectAPIContext = createContext<IProjectAPI>(initialStateAPI);

export const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [project, setProject] = useState<MyProject | null>(initialState.project);

  const openProjectDetail = useCallback((project: MyProject) => {
    setProject(project);
    deActivateBodyScroll();
  }, []);

  const closeProjectDetail = useCallback(() => {
    setProject(null);
    activateBodyScroll();
  }, []);

  const memorizedAPI = useMemo(
    () => ({ openProjectDetail, closeProjectDetail }),
    [closeProjectDetail, openProjectDetail]
  );

  return (
    <ProjectAPIContext.Provider value={memorizedAPI}>
      <ProjectContext.Provider value={{ project }}>{children}</ProjectContext.Provider>
    </ProjectAPIContext.Provider>
  );
};
