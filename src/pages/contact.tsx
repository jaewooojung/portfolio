import Head from "next/head";
import Layout from "@/components/Layout";
import useKeepingCursorPos from "@/utils/hooks/useKeepingCursorPos";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
  useKeepingCursorPos();
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
