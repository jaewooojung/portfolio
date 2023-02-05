import { CommonContext } from "@/context/common";
import { useContext } from "react";

export default function useCommonContext() {
  const { isDarkmode, isBelowSm, toggleDarkmode } = useContext(CommonContext);
  return { isDarkmode, isBelowSm, toggleDarkmode };
}
