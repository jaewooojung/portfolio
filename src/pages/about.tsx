import Head from "next/head";
import Layout from "@/components/Layout";
import useKeepingCursorPos from "@/utils/hooks/useKeepingCursorPos";

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
