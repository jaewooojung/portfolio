import { useRouter } from "next/router";
import { useEffect } from "react";
import useCommonContext from "./useCommonConrtext";
import { useCursorRef } from "./useCursorRef";

export default function useKeepingPrev() {
  const { cursorRef } = useCursorRef();
  const router = useRouter();
  const { toggleDarkmode } = useCommonContext();
  const {
    query: { cursorX, cursorY, isDarkmode },
  } = router;

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.setAttribute("style", `top: ${cursorX}; left: ${cursorY}`);
    }
    if (isDarkmode) {
      toggleDarkmode();
    }
  }, [cursorRef, cursorX, cursorY, isDarkmode, toggleDarkmode]);
}
