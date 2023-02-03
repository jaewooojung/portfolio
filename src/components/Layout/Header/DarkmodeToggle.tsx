import React from "react";
import useDarkmodeRef from "@/utils/hooks/useDarkmodeRef";

export default React.memo(function DarkmodeToggle() {
  const { darkmodeRef } = useDarkmodeRef();
  const toggleDarkmode = () => {
    if (darkmodeRef.current) {
      const isDark = darkmodeRef.current.classList.contains("dark");
      if (isDark) {
        darkmodeRef.current.classList.remove("dark");
      } else {
        darkmodeRef.current.classList.add("dark");
      }
    }
  };
  return <div onClick={toggleDarkmode}>darkmode</div>;
});
