import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ElementRefProvider } from "@/context/elementRef";
import "@/styles/globals.css";

export default appWithTranslation(function App({ Component, pageProps }: AppProps) {
  return (
    <ElementRefProvider>
      <Component {...pageProps} />
    </ElementRefProvider>
  );
});
