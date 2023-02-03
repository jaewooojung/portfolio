import Head from "next/head";
import Layout from "@/components/Layout";
import useKeepingCursorPos from "@/utils/hooks/useKeepingCursorPos";

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
