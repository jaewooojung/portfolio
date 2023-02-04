import { useCursorRef } from "@/utils/hooks/useCursorRef";

export default function Cursor() {
  const { cursorRef } = useCursorRef();
  return (
    <div ref={cursorRef} className="hidden sm:flex -z-10 absolute w-12 h-12 justify-center items-center rounded-full">
      <div className="absolute inset-0 border border-gray-400 rounded-full transition-transform"></div>
      <div className="w-full h-full rounded-full bg-gray-400 scale-[0.1] transition-all"></div>
    </div>
  );
}
