import { useRouter } from "next/router";
import { useCallback, useContext } from "react";
import { CommonContext } from "@/context/common";
import { LAYOUT_FADE_DURATION } from "../../constant";

/**
 * This hook is for the fade out effect when next routing
 */
export default function useSmoothPush() {
  const router = useRouter();
  const { layoutRef } = useContext(CommonContext);

  const smoothPush = useCallback(
    (value: string) => {
      if (router.pathname === value) {
        return;
      }
      if (layoutRef.current) {
        layoutRef.current.classList.replace("opacity-100", "opacity-0");
        setTimeout(() => {
          router.push(
            {
              pathname: value,
            },
            value
          );
        }, LAYOUT_FADE_DURATION);
      }
    },
    [layoutRef, router]
  );

  return { smoothPush };
}
