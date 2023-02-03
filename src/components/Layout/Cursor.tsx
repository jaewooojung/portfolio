import { useCursorRef } from "@/utils/hooks/useCursorRef";

export default function Cursor() {
  const { cursorRef } = useCursorRef();
  return <div ref={cursorRef} className="-z-10 absolute w-12 h-12 border border-gray-400 rounded-full"></div>;
}
