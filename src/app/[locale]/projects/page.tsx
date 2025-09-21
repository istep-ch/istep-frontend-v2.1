import Image from "next/image";
import titleImage from "@/assets/projects/titleImage.png";
import ProjectOverview from "@/components/projects/projectOverview/projectOverview";
import ScrollDown from "@/components/general/scrollDown/scrollDown";

import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

interface ProjectProps {
  params: {
    locale: string;
  };
}

export default function Projects({ params: { locale } }: ProjectProps) {
  setRequestLocale(locale);
  const t = useTranslations("OurProjects");

  return (
    <main>
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {t("mainTitle")}
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 w-full">
              <h4 className="text-white text-h-sm md:text-h-md mt-4 mb-4  md:text-left text-center font-palanquin !font-thin">
                {t("subTitle")}
              </h4>
            </div>
            <div className="lg:w-3/5 w-full flex justify-center">
              <Image
                src={titleImage}
                alt="Picture of the author"
                className="object-contain h-[420px] w-full"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <ScrollDown />
        </div>
      </div>
      <ProjectOverview lng={locale} />
    </main>
  );
}
