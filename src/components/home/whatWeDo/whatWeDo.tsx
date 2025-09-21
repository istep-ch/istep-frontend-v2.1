import Image from "next/image";
import whatWeDo_1 from "../../../assets/home/whatWeDo_1.png";
import whatWeDo_2 from "../../../assets/home/whatWeDo_2.png";

import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function wahtWeDo({ lng }: { lng: string }) {
  setRequestLocale(lng);

  const t = useTranslations("Home.whatWeDo");
  return (
    <>
      <div className="text-orange font-palanquin ">
        <h3 className="text-h-md md:text-h-lg "> {t("title")}</h3>
        <p className="text-p-lg md:text-h-md w-9/12">{t("subTitle")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-palanquin mt-4 md:mt-4">
        <p className="text-p-sm md:text-p-lg text-darkblue"> {t("text")}</p>
        <Image src={whatWeDo_1} alt="Picture of the author" height={400} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-palanquin mt-4 md:mt-4">
        <Image src={whatWeDo_2} alt="Picture of the author" height={400} />
        <p className="text-p-sm md:text-p-lg order-first md:order-last text-darkblue">
          {t("text2")}
        </p>
      </div>
    </>
  );
}
