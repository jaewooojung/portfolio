import { createContext, createRef, RefObject } from "react";

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
