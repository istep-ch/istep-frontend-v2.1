import VisionValueElement from "../visionValueElement/visionValueElement";

import ImageEnable from "@/assets/aboutUs/vision_enable.png";
import ImageRoom from "@/assets/aboutUs/vision_room.png";

import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

interface ourVisionProps {
  lng: string;
}

export default function ourVision({ lng }: ourVisionProps) {
  setRequestLocale(lng);

  const t = useTranslations("About.ourVision");
  return (
    <div className="bg-yellow/20">
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <div className="font-palanquin  text-orange">
          <h3 className="text-h-md md:text-h-lg  mb-2 md:mb-4">{t("title")}</h3>
          <p className="text-p-lg md:text-h-md w-full md:w-3/5 mb-2 md:mb-4">
            {t("subTitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="mt-4">
            <VisionValueElement
              title={t("enable.title")}
              image={ImageEnable}
              theme={"yellow"}
              text={t("enable.text")}
            />
          </div>
          <div className="mt-4">
            <VisionValueElement
              title={t("createSpace.title")}
              image={ImageRoom}
              theme={"yellow"}
              text={t("createSpace.text")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
