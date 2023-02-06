import { CommonContext } from "@/context/common";
import { useContext } from "react";

export default function useCommonContext() {
  const { isBelowLg } = useContext(CommonContext);
  return { isBelowLg };
}
