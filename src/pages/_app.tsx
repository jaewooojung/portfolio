import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { appWithTranslation, useTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import { CursorProvider } from "@/context/cursor";
import { CommonProvider } from "@/context/common";
import { ProjectProvider } from "@/context/project";
import "@/styles/globals.css";

const DEFAULT_SEO = {
  title: "JW's portfolio",
  description: "웹 프론트앤드 개발자 정재우의 포트폴리오입니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://portfolio-ten-blond-73.vercel.app/",
    title: "정재우의 포트폴리오",
    site_name: "JW's Portfolio",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/korea-storage.appspot.com/o/portfolio-og-thumbnail.png?alt=media&token=39751038-613f-4adc-be1e-29d7d67c959b",
        width: 1200,
        height: 630,
        alt: "JW's portfolio",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default appWithTranslation(function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class" enableSystem={false}>
        <CursorProvider>
          <CommonProvider>
            <ProjectProvider>
              <Component {...pageProps} />
            </ProjectProvider>
          </CommonProvider>
        </CursorProvider>
      </ThemeProvider>
    </>
  );
});
