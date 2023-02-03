import { ElementRefContext } from "@/context/elementRef";
import { useCallback, useContext } from "react";

export function useCursorRef() {
  const { cursorRef } = useContext(ElementRefContext);
  const scaleUpCursor = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.remove("animate-cursor-scale-down");
      cursorRef.current.classList.add("animate-cursor-scale-up");
    }
  }, [cursorRef]);
  const scaleDownCursor = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.remove("animate-cursor-scale-up");
      cursorRef.current.classList.add("animate-cursor-scale-down");
    }
  }, [cursorRef]);
  if (cursorRef) {
    return { cursorRef, scaleUpCursor, scaleDownCursor };
  } else {
    throw new Error("cursor context need to be initialized");
  }
}
