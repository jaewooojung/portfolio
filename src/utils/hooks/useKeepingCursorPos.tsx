import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCursorRef } from "./useCursorRef";

export default function useKeepingCursorPos() {
  const { cursorRef } = useCursorRef();
  const router = useRouter();
  const {
    query: { cursorX, cursorY },
  } = router;

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.setAttribute("style", `top: ${cursorX}; left: ${cursorY}`);
    }
  }, [cursorRef, cursorX, cursorY]);
}
