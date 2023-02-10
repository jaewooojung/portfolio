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
        <div className="">주력 포지션 - 웹 프론트앤드 전반(react) | 퍼블리싱</div>
        <div className="">주력 포지션 - 3D 랜더링</div>
        <hr className="my-4" />
        <div>
          <span>{t("email")} - </span>
          <a href="mailto: eoldamstory@gmail.com" className="font-bold tracking-wider">
            eoldamstory@gmail.com
          </a>
        </div>
        <div>
          <span>
            {t("kakaotalkId")} - <span className="font-bold">sarada3</span>
          </span>
        </div>
      </div>
    </div>
  );
}
