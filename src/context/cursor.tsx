import { createContext, createRef, RefObject, useCallback, useEffect, useMemo, useState } from "react";
import { noProviderHandler } from "../utils/common";

interface ICursor {
  isScreenBelowLg: boolean;
  cursorRef: RefObject<HTMLDivElement>;
  cursorAPI: {
    scaleUpBorder: () => void;
    scaleDownBorder: () => void;
    absorbColorToBg: (twColor: string) => void;
    resetBg: () => void;
    scaleUpAndAbsorbColor: (twColor: string) => void;
    scaleDownAndResetBg: () => void;
  };
}

const initialState = {
  isScreenBelowLg: false,
  cursorRef: createRef<HTMLDivElement>(),
  cursorAPI: {
    scaleUpBorder: () => noProviderHandler("ElementRef context - scaleUpBorder"),
    scaleDownBorder: () => noProviderHandler("ElementRef context - scaleDownBorder"),
    absorbColorToBg: () => noProviderHandler("ElementRef context - absorbColorToBg"),
    resetBg: () => noProviderHandler("ElementRef context - resetBg"),
    scaleUpAndAbsorbColor: () => noProviderHandler("ElementRef context - scaleUpAndAbsorbColor"),
    scaleDownAndResetBg: () => noProviderHandler("ElementRef context - scaleDownAndResetBg"),
  },
};

export const CursorContext = createContext<ICursor>(initialState);

const clearBgProperties = (element: HTMLDivElement) => {
  let prevBg: Array<string> = [];
  element.classList.forEach((c) => {
    if (c.startsWith("bg") || c.startsWith("dark:bg")) {
      prevBg.push(c);
    }
  });
  prevBg.forEach((bg) => {
    element.classList.remove(bg);
  });
};

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isScreenBelowLg, setIsScreenBelowLg] = useState(initialState.isScreenBelowLg);
  const { cursorRef } = initialState;

  const scaleUpBorder = useCallback(() => {
    if (cursorRef.current) {
      const cursorBorder = cursorRef.current.firstChild as HTMLDivElement;
      cursorBorder.classList.add("scale-150");
    }
  }, [cursorRef]);

  const scaleDownBorder = useCallback(() => {
    if (cursorRef.current) {
      const cursorBorder = cursorRef.current.firstChild as HTMLDivElement;
      cursorBorder.classList.remove("scale-150");
    }
  }, [cursorRef]);
  const absorbColorToBg = useCallback(
    (twColor: string) => {
      if (cursorRef.current) {
        const cursorDot = cursorRef.current.lastChild as HTMLDivElement;
        clearBgProperties(cursorDot);
        cursorDot.classList.remove("scale-[0.1]");
        cursorDot.classList.add("scale-100", twColor);
        cursorRef.current.classList.add("-z-40");
      }
    },
    [cursorRef]
  );
  const resetBg = useCallback(() => {
    if (cursorRef.current) {
      const cursorDot = cursorRef.current.lastChild as HTMLDivElement;
      clearBgProperties(cursorDot);
      cursorDot.classList.remove("scale-100");
      cursorDot.classList.add("scale-[0.1]", "bg-gray-400");
      cursorRef.current.classList.remove("-z-40");
    }
  }, [cursorRef]);
  const scaleUpAndAbsorbColor = useCallback(
    (twColor: string) => {
      if (cursorRef.current) {
        const cursorDot = cursorRef.current.lastChild as HTMLDivElement;
        clearBgProperties(cursorDot);
        cursorDot.classList.remove("scale-[0.1]");
        cursorDot.classList.add("scale-150", twColor);
        cursorRef.current.classList.add("-z-40");
      }
    },
    [cursorRef]
  );
  const scaleDownAndResetBg = useCallback(() => {
    if (cursorRef.current) {
      const cursorDot = cursorRef.current.lastChild as HTMLDivElement;
      clearBgProperties(cursorDot);
      cursorDot.classList.remove("scale-150");
      cursorDot.classList.add("scale-[0.1]", "bg-gray-400");
      cursorRef.current.classList.remove("-z-40");
    }
  }, [cursorRef]);

  const cursorAPI = useMemo(
    () => ({
      scaleUpBorder,
      scaleDownBorder,
      absorbColorToBg,
      resetBg,
      scaleUpAndAbsorbColor,
      scaleDownAndResetBg,
    }),
    [absorbColorToBg, resetBg, scaleDownAndResetBg, scaleDownBorder, scaleUpAndAbsorbColor, scaleUpBorder]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        window.document.body.style.cursor = "default";
      } else {
        window.document.body.style.cursor = "none";
      }
      setIsScreenBelowLg(window.innerWidth < 1024);
    };
    handleResize();

    const handleMousemove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.setAttribute("style", `top: ${event.y - 24}px; left: ${event.x - 24}px`);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMousemove);
    () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, [cursorRef]);

  return <CursorContext.Provider value={{ isScreenBelowLg, cursorRef, cursorAPI }}>{children}</CursorContext.Provider>;
};
