import { ElementRefContext } from "@/context/elementRef";
import { useContext } from "react";

export default function useDarkmodeRef() {
  const { darkmodeRef } = useContext(ElementRefContext);
  if (darkmodeRef) {
    return { darkmodeRef };
  } else {
    throw new Error("cursor context need to be initialized");
  }
}
