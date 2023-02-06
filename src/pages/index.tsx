import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/components/Layout";
import useKeepingCursor from "@/utils/hooks/useKeepingCursor";
import HomeComps from "@/components/home";
import { useTheme } from "next-themes";

export default function Home() {
  useKeepingCursor();
  return (
    <Layout>
      <Head>
        <title>Home | Jaewoo Jung</title>
      </Head>
      <HomeComps />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
};
