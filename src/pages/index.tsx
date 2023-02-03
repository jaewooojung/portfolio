import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/components/Layout";
import useKeepingCursorPos from "@/utils/hooks/useKeepingCursorPos";
import HomeComps from "@/components/home";

export default function Home() {
  useKeepingCursorPos();
  return (
    <Layout>
      <Head>
        <title>Home | Jaewoo Jung</title>
      </Head>
      <HomeComps />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
};
