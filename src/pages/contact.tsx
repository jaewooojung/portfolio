import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/Layout";
import ContactComps from "@/components/contact";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Jaewoo Jung</title>
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
