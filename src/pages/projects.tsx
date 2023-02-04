import Head from "next/head";
import Layout from "@/components/Layout";
import useKeepingCursorPos from "@/utils/hooks/useKeepingCursorPos";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Projects() {
  useKeepingCursorPos();
  return (
    <Layout>
      <Head>
        <title>Projects | Jaewoo Jung</title>
      </Head>
      <main>projects</main>
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
