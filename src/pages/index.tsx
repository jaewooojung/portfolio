import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/components/Layout";
import useKeepingPrev from "@/utils/hooks/useKeepingPrev";
import HomeComps from "@/components/home";
import { useTheme } from "next-themes";

export default function Home() {
  useKeepingPrev();
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
