import { createContext, createRef, RefObject, useCallback, useState } from "react";
import { MyProject } from "@/components/projects/projects";
import { activateBodyScroll, deActivateBodyScroll } from "../utils/dom";
import { noProviderHandler } from "@/utils/common";

interface ICommon {
  layoutRef: RefObject<HTMLDivElement>;
  project: MyProject | null;
  openProjectDetail: (project: MyProject) => void;
  closeProjectDetail: () => void;
}

const initialState = {
  layoutRef: createRef<HTMLDivElement>(),
  project: null,
  openProjectDetail: () => noProviderHandler("common"),
  closeProjectDetail: () => noProviderHandler("common"),
};

export const CommonContext = createContext<ICommon>(initialState);

export const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  const [project, setProject] = useState<MyProject | null>(initialState.project);

  const openProjectDetail = useCallback((project: MyProject) => {
    setProject(project);
    deActivateBodyScroll();
  }, []);

  const closeProjectDetail = useCallback(() => {
    setProject(null);
    activateBodyScroll();
  }, []);

  return (
    <CommonContext.Provider
      value={{ layoutRef: initialState.layoutRef, project, openProjectDetail, closeProjectDetail }}
    >
      {children}
    </CommonContext.Provider>
  );
};
