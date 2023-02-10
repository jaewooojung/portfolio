import Head from "next/head";
import Layout from "@/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ProjectsComps from "@/components/projects";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects | Jaewoo Jung</title>
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
