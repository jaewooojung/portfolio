import { useTranslation } from "next-i18next";
import { PageTitle } from "../reuse/common";

export default function ContactComps() {
  const { t } = useTranslation("contact");
  return (
    <div>
      <PageTitle title={t("title")} />
      <div className="text-sm">
        <hr className="mb-4" />
        <div className="">{t("div1")}</div>
        <br />
        <div className="">{t("div2")}</div>
        <hr className="my-4" />
        <div>
          <span>{t("email")} - </span>
          <a href="mailto: eoldamstory@gmail.com" className="font-bold tracking-wider">
            eoldamstory@gmail.com
          </a>
        </div>
        <div>
          <span>
            {t("kakaotalkId")} - <span className="font-bold">sarada0205</span>
          </span>
        </div>
      </div>
    </div>
  );
}
