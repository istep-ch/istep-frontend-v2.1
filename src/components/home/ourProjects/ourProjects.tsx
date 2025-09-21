import Carousel from "./carousel/carousel";
//import { useTranslation } from "@/app/i18n";$

import { setRequestLocale } from "next-intl/server";

import { useTranslations } from "next-intl";

interface ourProjectsProps {
  lng: string;
}

export default async function OurProjects({ lng }: ourProjectsProps) {
  setRequestLocale(lng);
  const t = useTranslations("Home.ourProjects");

  const projects = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <div className="bg-yellow/40 ">
      <div className="md:py-24 py-12">
        <div className=" mb-6 text-orange font-palanquin  container mx-auto px-8 lg:px-4">
          <h3 className="text-h-md md:text-h-lg ">{t("title")}</h3>
          <p className="text-p-lg md:text-h-md w-9/12">{t("subTitle")}</p>
        </div>
        <div className="md:mt-16 mt-8 container mx-auto px-0 ">
          <Carousel projects={projects.Projects} />
        </div>
      </div>
    </div>
  );
}
