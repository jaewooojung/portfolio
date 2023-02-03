import Head from "next/head";
import Layout from "@/components/Layout";
import useKeepingCursorPos from "@/utils/hooks/useKeepingCursorPos";

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
