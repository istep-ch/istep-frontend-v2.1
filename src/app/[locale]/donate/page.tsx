import Image from "next/image";
import titleImage from "@/assets/aboutUs/titleImage.png";

import CoursesTeaserElement from "@/components/general/courseTeaserElement/courseTeaserElement";
import DonateQR from "@/components/donate/donteQR/donateQR";
import DonateTwint from "@/components/donate/donateTwint/donateTwint";
import DonateRaiseNow from "@/components/donate/donateRaiseNow/donateRaiseNow";
import DonateBankConnection from "@/components/donate/donateBankConnection/donateBankConnection";

//images
import ITImage from "@/assets/general/coursesIcons/IT.png";
import MultimediaImage from "@/assets/general/coursesIcons/multimedia.png";
import MSOfficeImage from "@/assets/general/coursesIcons/MS-office.png";
import DiverseKurse from "@/assets/general/coursesIcons/diverse_kurse.png";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

interface CoursesProps {
  params: {
    locale: string;
  };
}

export default function Donate({ params: { locale } }: CoursesProps) {
  setRequestLocale(locale);
  const t = useTranslations("Donate"); // Access translations

  return (
    <main className=" z-10">
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {t("mainTitle")}
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 w-full">
              <h4 className="text-white text-h-sm md:text-h-md mt-4 mb-4  md:text-left text-center font-palanquin !font-thin"></h4>
            </div>
            <div className="lg:w-3/5 w-full flex justify-center">
              <Image
                src={titleImage}
                alt="Picture of the author"
                className="h-96 object-contain "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <div className="mt-4">
          <DonateQR lng={locale} />
        </div>
        <div className="mt-4">
          <DonateBankConnection />
        </div>

        <div className="mt-4">
          <DonateRaiseNow />
        </div>
      </div>
    </main>
  );
}
