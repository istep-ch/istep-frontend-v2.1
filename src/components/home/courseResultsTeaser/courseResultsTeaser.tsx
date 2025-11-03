import TeaserIntroText from "@/components/general/teaserIntroText/teaserIntroText";
import Carousel from "./carousel/carousel";

export default async function CourseResultsTeaser({
  resultsOverview,
  locale,
}: any) {
  return (
    <>
      <div className=" md:py-24 py-12 px-8 lg:px-4 container mx-auto ">
        <TeaserIntroText
          title={resultsOverview.title}
          subTitle={resultsOverview.subTitle}
          text={resultsOverview.text}
          theme={"orange"}
        />

        <div className="w-full mt-8">
          <Carousel results={resultsOverview.results} locale={locale} />
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
