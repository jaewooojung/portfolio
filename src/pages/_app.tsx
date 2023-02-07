import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { CursorProvider } from "@/context/cursor";
import { CommonProvider } from "@/context/common";
import "@/styles/globals.css";

export default appWithTranslation(function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <CommonProvider>
        <CursorProvider>
          <Component {...pageProps} />
        </CursorProvider>
      </CommonProvider>
    </ThemeProvider>
  );
});
