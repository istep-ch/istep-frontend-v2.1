import TeaserIntroText from "@/components/general/teaserIntroText/teaserIntroText";
import Carousel from "./carousel/carousel";

import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

interface courseResultsProps {
  lng: string;
  idx?: number;
}

export default async function CourseResultsTeaser({
  lng,
  idx,
}: courseResultsProps) {
  setRequestLocale(lng);
  const t = useTranslations("Home.results");
  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <>
      <div className=" md:py-24 py-12 px-8 lg:px-4 container mx-auto ">
        <TeaserIntroText
          title={t("title")}
          subTitle={t("subTitle")}
          text={t("text")}
          theme={"orange"}
        />

        <div className="w-full mt-8">
          <Carousel results={translation.Results} lng={lng} />
        </div>
        {/* <div className="flex justify-end">
          <button className="bg-orange text-white px-6 py-2 rounded-full mt-8 font-palanquin ">
            {t("buttonText")}
          </button>
        </div> */}
      </div>
    </>
  );
}
