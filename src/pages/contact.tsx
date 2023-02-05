import Head from "next/head";
import Layout from "@/components/Layout";
import useKeepingPrev from "@/utils/hooks/useKeepingPrev";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
  useKeepingPrev();
  return (
    <Layout>
      <Head>
        <title>Contact me | Jaewoo Jung</title>
      </Head>
      contact
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
