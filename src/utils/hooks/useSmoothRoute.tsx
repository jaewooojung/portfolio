import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useCursorRef } from "./useCursorRef";
import useLayoutRef from "./useLayoutRef";

export default function useSmoothRoute() {
  const router = useRouter();
  const { cursorRef } = useCursorRef();
  const { layoutRef } = useLayoutRef();

  const smoothRoute = useCallback(
    (value: string) => {
      if (router.pathname === value) {
        return;
      }
      if (layoutRef.current && cursorRef.current) {
        const cursorX = cursorRef.current.style.top;
        const cursorY = cursorRef.current.style.left;
        layoutRef.current.classList.add("animate-fade-out");
        layoutRef.current.onanimationend = (event: AnimationEvent) => {
          if (event.animationName === "fadeOut") {
            router.push(
              {
                pathname: value,
                query: { cursorX, cursorY },
              },
              value
            );
          }
        };
      }
    },
    [cursorRef, layoutRef, router]
  );

  return { smoothRoute };
}
