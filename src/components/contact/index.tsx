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
        <hr className="my-4" />
        <div>
          <span>이메일 - </span>
          <a href="mailto: eoldamstory@gmail.com" className="font-bold tracking-wider">
            eoldamstory@gmail.com
          </a>
        </div>
        <div>
          <span>
            카카오톡 아이디 - <span className="font-bold">sarada3</span>
          </span>
        </div>
      </div>
    </div>
  );
}
