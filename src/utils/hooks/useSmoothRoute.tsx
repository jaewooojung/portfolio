import { useRouter } from "next/router";
import { useCallback } from "react";
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
        layoutRef.current.classList.replace("opacity-100", "opacity-0");
        setTimeout(() => {
          router.push(
            {
              pathname: value,
            },
            value
          );
        }, 300);
      }
    },
    [cursorRef, layoutRef, router]
  );

  return { smoothRoute };
}
