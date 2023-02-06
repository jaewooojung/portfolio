import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { ElementRefProvider } from "@/context/elementRef";
import { CommonProvider } from "@/context/common";
import "@/styles/globals.css";

export default appWithTranslation(function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <CommonProvider>
        <ElementRefProvider>
          <Component {...pageProps} />
        </ElementRefProvider>
      </CommonProvider>
    </ThemeProvider>
  );
});
