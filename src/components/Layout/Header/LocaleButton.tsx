import { useCursorRef } from "@/utils/hooks/useCursorRef";
import Link from "next/link";
import React from "react";

export default React.memo(function LocaleButton({ localeTo, asPath }: { localeTo: string; asPath: string }) {
  const { scaleUpCursor, scaleDownCursor } = useCursorRef();

  return (
    <div className="px-2 py-[2px] hover:animate-pulse" onMouseEnter={scaleUpCursor} onMouseLeave={scaleDownCursor}>
      <Link href={asPath} locale={localeTo} className="text-gray-500">
        {localeTo.toUpperCase()}
      </Link>
    </div>
  );
});
