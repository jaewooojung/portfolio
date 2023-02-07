import { ElementRefContext } from "@/context/elementRef";
import { useCallback, useContext, useMemo } from "react";

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

export function useCursorRef() {
  const { cursorRef } = useContext(ElementRefContext);

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
    }
  }, [cursorRef]);
  const scaleUpAndAbsorbColor = useCallback(
    (twColor: string) => {
      if (cursorRef.current) {
        const cursorDot = cursorRef.current.lastChild as HTMLDivElement;
        clearBgProperties(cursorDot);
        cursorDot.classList.remove("scale-[0.1]");
        cursorDot.classList.add("scale-150", twColor);
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
    }
  }, [cursorRef]);

  if (cursorRef) {
    return {
      cursorRef,
      scaleUpBorder,
      scaleDownBorder,
      absorbColorToBg,
      resetBg,
      scaleUpAndAbsorbColor,
      scaleDownAndResetBg,
    };
  } else {
    throw new Error("cursor context need to be initialized");
  }
}
