import VisionValueElement from "../visionValueElement/visionValueElement";
import titleImage from "@/assets/home/titleImage.png";
import engagementImage from "@/assets/aboutUs/werte-engagement.png";
import individualitaeteImage from "@/assets/aboutUs/werte-individualitaet.png";
import nachhaltigImage from "@/assets/aboutUs/werte-nachhaltig.png";

import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

interface ourValuesProps {
  lng: string;
}

export default function ourValues({ lng }: ourValuesProps) {
  setRequestLocale(lng);

  const t = useTranslations("About.ourValues");
  return (
    <div>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <div className="font-palanquin  text-orange">
          <h3 className="text-h-md md:text-h-lg  mb-2 md:mb-4">{t("title")}</h3>
          <p className="text-p-lg md:text-h-md w-full md:w-3/5 mb-2 md:mb-4">
            {t("subTitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div className="mt-4">
            <VisionValueElement
              title={t("appreciation.title")}
              image={engagementImage}
              theme={"darkblue"}
              text={t("appreciation.text")}
            />
          </div>
          <div className="mt-4">
            <VisionValueElement
              title={t("individualSupport.title")}
              image={individualitaeteImage}
              theme={"darkblue"}
              text={t("individualSupport.text")}
            />
          </div>
          <div className="mt-4">
            <VisionValueElement
              title={t("growingTogether.title")}
              image={nachhaltigImage}
              theme={"darkblue"}
              text={t("growingTogether.text")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
