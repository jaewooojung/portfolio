import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/Layout";
import HomeComps from "@/components/home";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>JW | Home</title>
      </Head>
      <HomeComps />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home", "common"])),
    },
  };
};
