import Head from "next/head";
import Layout from "@/components/Layout";
import useKeepingCursorPos from "@/utils/hooks/useKeepingCursorPos";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  useKeepingCursorPos();
  return (
    <Layout>
      <Head>
        <title>About me | Jaewoo Jung</title>
      </Head>
      <main>about</main>
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
