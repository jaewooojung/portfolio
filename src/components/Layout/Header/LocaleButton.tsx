import useCommonContext from "@/utils/hooks/useCommonConrtext";
import { useCursorRef } from "@/utils/hooks/useCursorRef";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";

export default React.memo(function LocaleButton() {
  const router = useRouter();
  const { cursorRef } = useCursorRef();
  const { isBelowLg } = useCommonContext();

  const localeTo = router.locales!.find((locale) => locale !== router.locale) as string;

  const handleClick = () => {
    if (isBelowLg) {
      router.replace(
        {
          pathname: router.asPath,
        },
        router.asPath,
        {
          locale: localeTo,
        }
      );
    } else {
      if (cursorRef.current) {
        const cursorX = cursorRef.current.style.top;
        const cursorY = cursorRef.current.style.left;
        router.replace(
          {
            pathname: router.asPath,
            query: { cursorX, cursorY },
          },
          router.asPath,
          {
            locale: localeTo,
          }
        );
      }
    }
  };

  return (
    <div className={clsx("w-7 h-7 flex justify-center items-center", "lg:hover:underline lg:underline-offset-2")}>
      <button onClick={handleClick}>{localeTo.toUpperCase()}</button>
    </div>
  );
});
