import { createContext, useCallback, useEffect, useState } from "react";

interface ICommon {
  isDarkmode: boolean;
  isBelowSm: boolean;
  toggleDarkmode: () => void;
}

const initialState = {
  isDarkmode: false,
  isBelowSm: true,
  toggleDarkmode: () => {},
};

export const CommonContext = createContext<ICommon>(initialState);

export const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkmode, setIsDarkmode] = useState(initialState.isDarkmode);
  const [isBelowSm, setIsBelowSm] = useState(initialState.isBelowSm);

  const toggleDarkmode = useCallback(() => {
    setIsDarkmode((prev) => !prev);
  }, []);
  // "ontouchstart" in windowObj
  useEffect(() => {
    const onResize = (event: Event) => {
      const windowObj = event.target as Window;
      if (windowObj.innerWidth < 640) {
        windowObj.document.body.style.cursor = "default";
      } else {
        windowObj.document.body.style.cursor = "none";
      }
      setIsBelowSm(windowObj.innerWidth < 640);
    };
    window.addEventListener("resize", onResize);

    if (window.innerWidth < 640) {
      window.document.body.style.cursor = "default";
    } else {
      window.document.body.style.cursor = "none";
    }
    setIsBelowSm(window.innerWidth < 640);
    () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <CommonContext.Provider value={{ isDarkmode, isBelowSm, toggleDarkmode }}>{children}</CommonContext.Provider>;
};
