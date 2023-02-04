import { useCursorRef } from "@/utils/hooks/useCursorRef";
import { useRouter } from "next/router";
import React from "react";

export default React.memo(function LocaleButton() {
  const router = useRouter();
  const { cursorRef } = useCursorRef();

  const localeTo = router.locales!.find((locale) => locale !== router.locale) as string;

  const handleClick = () => {
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
  };
  return (
    <div className="w-7 h-7 flex justify-center items-center text-gray-500 underline-offset-2 hover:underline">
      <a onClick={handleClick} className="">
        {localeTo.toUpperCase()}
      </a>
    </div>
  );
});
