import { useTranslation } from "next-i18next";
export default function HomeComps() {
  const { t } = useTranslation("home");
  return (
    <div>
      <h1>{t("title")}</h1>
      <h2>{t("subTitle")}</h2>
      <p>
        After working as a real estate agent for several years, <br />i returned to the university I had dropped out of
        and completed my degree in software engineering.
        <br />
        2023, this year, i{"'"}m going to start my career as a developer in earnest.
      </p>
      <p>
        With huge interest about interactive web application, i{"'"}m searching for the job in web front-end or web
        publishing area. You can check my works on the projects tab. Please feel free to contact me.
      </p>
    </div>
  );
}
