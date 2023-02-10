import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { CursorProvider } from "@/context/cursor";
import { CommonProvider } from "@/context/common";
import "@/styles/globals.css";
import { ProjectProvider } from "@/context/project";

export default appWithTranslation(function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <CursorProvider>
        <CommonProvider>
          <ProjectProvider>
            <Component {...pageProps} />
          </ProjectProvider>
        </CommonProvider>
      </CursorProvider>
    </ThemeProvider>
  );
});
