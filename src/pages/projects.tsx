import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "@/Layout";
import ProjectsComps from "@/components/projects";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>JW | Projects</title>
      </Head>
      <ProjectsComps />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["projects", "common"])),
    },
  };
};
