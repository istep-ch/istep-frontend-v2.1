import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default function Impressum({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = useTranslations("impressum");
  return (
    <main className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
      <div className="mt-4 font-palanquin text-darkblue">
        <h3 className="text-h-md md:text-h-lg ">{t("title")}</h3>
        <div className="md:mt-8 mt-4 font-palanquin text-darkblue">
          <p className="md:text-h-sm text-h-xs">iSTEP</p>
          <p className="md:text-h-xs text-p-lg !font-thin mt-2">
            Parkettstrasse 36
          </p>
          <p className="md:text-h-xs text-p-lg !font-thin mb-4">
            3432 Lützelflüh
          </p>
          <a
            className="md:text-h-xs text-p-lg !font-thin underline"
            href="mailto:info@istep.ch"
          >
            info@istep.ch
          </a>
        </div>
        <div className="md:mt-16 mt-8">
          <h5 className="text-h-sm md:text-h-md">{t("disclaimer.title")}</h5>
          <p className="md:text-p-lg text-p-xs">{t("disclaimer.text")}</p>
        </div>
        <div className="md:mt-16 mt-8">
          <h5 className="text-h-sm md:text-h-md">
            {t("disclaimerForLinks.title")}
          </h5>
          <p className="md:text-p-lg text-p-xs">
            {t("disclaimerForLinks.text")}
          </p>
        </div>
        <div className="md:mt-16 mt-8">
          <h5 className="text-h-sm md:text-h-md"> {t("copyrights.title")}</h5>
          <p className="md:text-p-lg text-p-xs">{t("copyrights.text")}</p>
        </div>
      </div>
    </main>
  );
}
