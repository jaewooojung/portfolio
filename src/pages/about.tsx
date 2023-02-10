import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/Layout";
import AboutComps from "@/components/about";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About me | Jaewoo Jung</title>
      </Head>
      <AboutComps />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "projects", "common"])),
    },
  };
};
