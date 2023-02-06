import { createContext, useCallback, useEffect, useState } from "react";

interface ICommon {
  isBelowLg: boolean;
}

const initialState = {
  isBelowLg: true,
};

export const CommonContext = createContext<ICommon>(initialState);

export const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBelowLg, setisBelowLg] = useState(initialState.isBelowLg);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 640) {
        window.document.body.style.cursor = "default";
      } else {
        window.document.body.style.cursor = "none";
      }
      setisBelowLg(window.innerWidth < 640);
    };
    onResize();
    window.addEventListener("resize", onResize);
    () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <CommonContext.Provider value={{ isBelowLg }}>{children}</CommonContext.Provider>;
};
