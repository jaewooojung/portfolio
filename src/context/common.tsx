import { createContext, createRef, RefObject, useEffect, useState } from "react";

interface ICommon {
  isBelowLg: boolean;
  layoutRef: RefObject<HTMLDivElement>;
}

const initialState = {
  isBelowLg: false,
  layoutRef: createRef<HTMLDivElement>(),
};

export const CommonContext = createContext<ICommon>(initialState);

export const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBelowLg, setisBelowLg] = useState(initialState.isBelowLg);
  const { layoutRef } = initialState;

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 1024) {
        window.document.body.style.cursor = "default";
      } else {
        window.document.body.style.cursor = "none";
      }
      setisBelowLg(window.innerWidth < 1024);
    };
    onResize();
    window.addEventListener("resize", onResize);
    () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <CommonContext.Provider value={{ isBelowLg, layoutRef }}>{children}</CommonContext.Provider>;
};
