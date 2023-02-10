import { createContext, createRef, RefObject, useCallback, useState } from "react";
import { MyProject } from "@/components/projects/projects";
import { activateBodyScroll, deActivateBodyScroll } from "../utils/dom";
import { noProviderHandler } from "@/utils/common";

interface ICommon {
  layoutRef: RefObject<HTMLDivElement>;
}

const initialState = {
  layoutRef: createRef<HTMLDivElement>(),
};

export const CommonContext = createContext<ICommon>(initialState);

export const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  return <CommonContext.Provider value={{ layoutRef: initialState.layoutRef }}>{children}</CommonContext.Provider>;
};
