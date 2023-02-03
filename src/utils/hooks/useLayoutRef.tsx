import { ElementRefContext } from "@/context/elementRef";
import { useContext } from "react";

export default function useLayoutRef() {
  const { layoutRef } = useContext(ElementRefContext);
  if (layoutRef) {
    return { layoutRef };
  } else {
    throw new Error("cursor context need to be initialized");
  }
}
