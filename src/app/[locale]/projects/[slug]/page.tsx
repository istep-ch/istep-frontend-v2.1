import Image from "next/image";
import ScrollDown from "@/components/general/scrollDown/scrollDown";

import { setRequestLocale } from "next-intl/server";

/*export function generateStaticParams() {
  const ids = ["elbasan", "lezha", "gjader"];
  return ids.map((id) => {
    return { id };
  });
}*/
export function generateStaticParams() {
  return [
    { locale: "de", slug: "elbasan" },
    { locale: "de", slug: "lezha" },
    { locale: "de", slug: "gjader" },
    { locale: "de", slug: "librazhd" },
    { locale: "en", slug: "elbasan" },
    { locale: "en", slug: "lezha" },
    { locale: "en", slug: "gjader" },
    { locale: "en", slug: "librazhd" },
  ];
}

export default async function detailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const translation = (
    await import(`../../../../../locales/${locale}/${locale}.json`)
  ).default;

  const matchedProject = translation.Projects.find(
    (project: any) => project.link.toLowerCase() === "/" + slug.toLowerCase()
  );

  if (!matchedProject) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <div className=" z-10 w-full pb-8 md:-pd-0 ">
        <div className="bg-darkblue min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] pb-12 relative">
          <div className="container mx-auto md:pt-48 px-8 pt-8 lg:px-4 ">
            <div className="md:w-2/3 w-full">
              <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
                {matchedProject.title}
              </h1>
              <p className="text-white text-h-xs md:text-h-sm mt-4 mb-4 md:text-left text-center font-palanquin !font-thin">
                {matchedProject.teaser}
              </p>
            </div>
          </div>
          {/* <div className="mb-48"></div> */}

          <div className="w-full justify-end flex md:px-0 px-8 ">
            <Image
              src={matchedProject.image}
              alt={`Image of ${matchedProject.title}`}
              className="h-full object-contain md:w-1/2 w-full md:mr-16 z-20 mt-4 rounded-3xl"
              width={1920}
              height={1080}
            />
          </div>
          <div className="hidden md:block">
            <ScrollDown />
          </div>
        </div>
      </div>
      {/* <div className="md:pt-36 md:pb-12" /> */}
      <div className="container mx-auto md:pt-18 pt-12 px-8 lg:px-4 ">
        <div className="text-orange font-palanquin ">
          <h3 className="text-h-md md:text-h-lg font-thin ">
            {matchedProject.details.theLocation}
          </h3>

          <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
              <p className="text-darkblue text-p-sm md:text-p-lg mt-4 mb-4 font-palanquin !font-thin">
                {matchedProject.details.theLocationText}
              </p>
            </div>
            <div className="flex items-center justify-end">
              <Image
                src={matchedProject.details.theLocationImage}
                alt={`Image of ${matchedProject.title}`}
                className="md:w-4/5 w-full object-contain h-min rounded-3xl"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:pt-18 pt-12 px-8 lg:px-4 pb-32">
        <div className="text-orange font-palanquin ">
          <h3 className="text-h-md md:text-h-lg font-thin ">
            {matchedProject.details.whatWeDo}
          </h3>

          <div className="grid md:grid-cols-2 grid-cols-1 mt-6">
            <div className="flex items-center justify-start">
              <Image
                src={matchedProject.details.whatWeDoImage}
                alt={`Image of ${matchedProject.title}`}
                className="md:w-4/5 w-full h-min object-contain rounded-3xl"
                width={500}
                height={300}
              />
            </div>
            <div>
              <p className="text-darkblue text-p-sm md:text-p-lg mt-4 mb-4 font-palanquin !font-thin">
                {matchedProject.details.whatWeDoText}
              </p>
              <p className="text-darkblue text-p-sm md:text-p-lg mt-4 mb-4 font-palanquin !font-thin">
                {matchedProject.details.whatWeDoText2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
