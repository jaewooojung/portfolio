import Head from "next/head";
import Layout from "@/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactComps from "@/components/contact";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact me | Jaewoo Jung</title>
      </Head>
      <ContactComps />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "common"])),
    },
  };
};
