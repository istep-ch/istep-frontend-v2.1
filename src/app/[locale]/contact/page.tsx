import Image from "next/image";
import titleImage from "@/assets/aboutUs/titleImage.png";
import FormComp from "@/components/contact/form/form";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import ScrollDown from "@/components/general/scrollDown/scrollDown";

interface ContactProps {
  params: {
    locale: string;
  };
}

export default function Contact({ params: { locale } }: ContactProps) {
  setRequestLocale(locale);
  const t = useTranslations("Contact");

  return (
    <main className=" z-10">
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {t("title")}
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
                className="h-108 object-contain "
              />
            </div>
          </div>
          <div className="hidden md:block">
            <ScrollDown />
          </div>
        </div>
      </div>
      <FormComp lng={locale} />
    </main>
  );
}
