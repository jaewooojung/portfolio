import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cursor from "./Cursor";
import LayoutFooter from "./Footer";
import LayoutHeader from "./Header";
import useLayoutRef from "@/utils/hooks/useLayoutRef";
import Background from "./Background";
import SideBar from "./SideBar";
import { LAYOUT_FADE_DURATION } from "../../constant";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { layoutRef } = useLayoutRef();
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", (e) => {
      console.log(e, 1);
    });
  }, [router]);

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <div
        ref={layoutRef}
        style={{
          transitionDuration: `${LAYOUT_FADE_DURATION}ms`,
        }}
        className={clsx(
          `px-4 text-zinc-800 transition-opacity max-w-[1920px] min-h-screen opacity-100`,
          "sm:px-10 lg:px-28 xl:px-32 2xl:px-60",
          "dark:text-zinc-400"
        )}
      >
        <Cursor />
        <SideBar />
        <LayoutHeader />
        <main className={clsx("relative pt-8 pb-14", "lg:px-16 xl:px-32 2xl:px-40 lg:pt-10 lg:pb-16")}>{children}</main>
        <LayoutFooter />
      </div>
    </>
  );
}
