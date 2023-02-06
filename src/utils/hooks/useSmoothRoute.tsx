import { useRouter } from "next/router";
import { useCallback } from "react";
import { useCursorRef } from "./useCursorRef";
import useLayoutRef from "./useLayoutRef";
import { LAYOUT_FADE_DURATION } from "../../constant";

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
        Promise.all([
          router.prefetch(value, value, { locale: router.locale }),
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve("");
            }, LAYOUT_FADE_DURATION);
          }),
        ]).then(() => {
          router.push(
            {
              pathname: value,
            },
            value
          );
        });
      }
    },
    [cursorRef, layoutRef, router]
  );

  return { smoothRoute };
}
