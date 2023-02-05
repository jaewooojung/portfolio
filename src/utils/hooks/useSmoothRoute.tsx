import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import useCommonContext from "./useCommonConrtext";
import { useCursorRef } from "./useCursorRef";
import useLayoutRef from "./useLayoutRef";

export default function useSmoothRoute() {
  const router = useRouter();
  const { cursorRef } = useCursorRef();
  const { layoutRef } = useLayoutRef();
  const { isDarkmode } = useCommonContext();

  const smoothRoute = useCallback(
    (value: string) => {
      if (router.pathname === value) {
        return;
      }
      if (layoutRef.current && cursorRef.current) {
        const cursorX = cursorRef.current.style.top;
        const cursorY = cursorRef.current.style.left;
        layoutRef.current.classList.replace("opacity-100", "opacity-0");
        setTimeout(() => {
          router.push(
            {
              pathname: value,
              query: { cursorX, cursorY, isDarkmode },
            },
            value
          );
        }, 150);
      }
    },
    [cursorRef, isDarkmode, layoutRef, router]
  );

  return { smoothRoute };
}
