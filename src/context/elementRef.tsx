import { createContext, createRef, RefObject, useEffect } from "react";

interface IElementRef {
  cursorRef: RefObject<HTMLDivElement>;
  layoutRef: RefObject<HTMLDivElement>;
}

const initialRefs = {
  cursorRef: createRef<HTMLDivElement>(),
  layoutRef: createRef<HTMLDivElement>(),
};

export const ElementRefContext = createContext<IElementRef>(initialRefs);

export const ElementRefProvider = ({ children }: { children: React.ReactNode }) => {
  const { cursorRef, layoutRef } = initialRefs;

  useEffect(() => {
    const handleMousemove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.setAttribute("style", `top: ${event.y - 24}px; left: ${event.x - 24}px`);
      }
    };
    window.addEventListener("mousemove", handleMousemove);
    () => {
      window.removeEventListener("mousemove", handleMousemove);
    };
  }, [cursorRef]);

  return <ElementRefContext.Provider value={{ cursorRef, layoutRef }}>{children}</ElementRefContext.Provider>;
};
