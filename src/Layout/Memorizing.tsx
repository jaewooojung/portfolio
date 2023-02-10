import React from "react";

export default React.memo(function Memorizing({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
});
