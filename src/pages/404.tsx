import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-full h-full"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
);

export default function Custom404() {
  const router = useRouter();
  const { t } = useTranslation("error");
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center cursor-default">
      <div className="mb-4 flex items-center">
        <div className="mr-4 pr-4 text-3xl font-bold text-emerald-500 border-r-2 border-r-zinc-500">JW</div>
        <h1>{t("h1")}</h1>
      </div>
      <button
        onClick={() => router.push("/")}
        className="px-2 py-1 flex items-center border border-zinc-500 rounded-xl"
      >
        <div className="mr-2 w-4 h-4">
          <HomeIcon />
        </div>
        <div className="text-sm">Home</div>
      </button>
      <div className="absolute bottom-5 text-center text-sm">
        <div>{t("contact")}</div>
        <div>eoldamstory@gmail.com | kakaotalk id - sarada0205</div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["error"])),
    },
  };
};
