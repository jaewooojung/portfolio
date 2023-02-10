import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ArrowDownIcon = () => (
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
      d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const EarthIcon = () => (
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
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

export default React.memo(function LocaleButton() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");
  const localeTo = router.locales!.find((locale) => locale !== router.locale) as string;

  const handleClick = () => {
    setLoading(true);
    setModalOpen(false);
    router
      .replace(
        {
          pathname: router.asPath,
        },
        router.asPath,
        {
          locale: localeTo,
          scroll: false,
        }
      )
      .then((result: boolean) => {
        if (result) {
          setLoading(false);
          setModalOpen(true);
        } else {
          throw new Error("Network failed");
        }
      });
  };

  return (
    <div className="relative flex items-center">
      {loading ? (
        <div className="w-5 h-5 animate-bounce">
          <ArrowDownIcon />
        </div>
      ) : (
        <div className="w-5 h-5">
          <EarthIcon />
        </div>
      )}
      :
      <div className={clsx("w-6 h-6 flex justify-center items-center text-sm underline underline-offset-4")}>
        <button onClick={handleClick}>{localeTo.toUpperCase()}</button>
      </div>
      {modalOpen && (
        <div className="absolute bottom-[105%] p-1 min-w-max flex justify-end items-end border rounded-md border-zinc-500 animate-modal-fade-out">
          <span className="text-sm">{t(`change-to-${router.locale}`)}</span>
          <div className="absolute top-full left-1 border-t-4 border-l-4 border-l-transparent border-r-4 border-r-transparent border-zinc-500"></div>
        </div>
      )}
    </div>
  );
});
