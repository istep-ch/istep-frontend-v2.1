"use client";
import Image from "next/image";
import ScrollDown from "@/components/general/scrollDown/scrollDown";
import { unstable_setRequestLocale } from "next-intl/server";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

/*export function generateStaticParams() {
  const locales = ["de", "en"];
  const idCount = 10;

  const result: any = [];

  locales.forEach((locale) => {
    for (let i = 0; i < idCount; i++) {
      result.push({ locale, id: i.toString() });
    }
  });

  return result;
}*/
const ABOUT_US_QUERY = gql`
  query AllAboutUs($language: String!) {
    allAboutUs(where: { language: { eq: $language } }) {
      eyeCatcher {
        title
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;

// Apollo Client hooks like useQuery cannot be used in server components.

export default function detailPage({
  params: { locale, id },
}: {
  params: { locale: string; id: number };
}) {
  /*
  unstable_setRequestLocale(locale);
  const translation = (
    await import(`../../../../../locales/${locale}/${locale}.json`)
  ).default;

  const newImages: any = [];
  const newText: any = [];
  const images = translation.Blog.blogs[id].images;
  const texts = translation.Blog.blogs[id].texts;

  const loopLength = Math.max(images.length - 1, texts.length);

  for (let i = 0; i < texts.length; i++) {
    newText.push({ type: "text", content: texts[i] });
  }
  for (let i = 1; i < images.length; i++) {
    newImages.push({ type: "image", content: images[i] });
  }*/

  return (
    <main>
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] z-10 w-full pb-8 md:pb-0">
        <div className="bg-darkblue min-h-[calc(100vh-80px)]">
          <div className="container mx-auto md:pt-48 px-8 pt-8 lg:px-4 relative">
            <div className="md:w-2/3 w-full">
              <h1>asd</h1>
              {/* <h1 className="lg:text-h-l text-h-md text-yellow font-palanquin md:text-left text-center">
                {translation.Blog.blogs[id].title}
              </h1>
              <p className="text-white text-h-xs md:text-h-sm mt-4 mb-4 md:text-left text-center font-palanquin !font-thin">
                {translation.Blog.blogs[id].text}
              </p>
            </div>
          </div>
          <div className="container mx-auto py-12 md:mt-12 lg:px-4">
            {/* <div className="w-full justify-end flex md:p-0 p-8">
              <Image
                src={translation.Blog.blogs[id].images[0]}
                alt={`Image of ${translation.Blog.blogs[id].title}`}
                className="h-full object-contain md:w-1/2 w-full md:mr-16 z-20 rounded-3xl"
                width={500}
                height={300}
              />
            </div> */}
          </div>
          <ScrollDown />
        </div>
      </div>
      {/* <div className="md:pt-48 md:pb-24" /> */}
      <div className="container mx-auto py-12 md:mt-16 lg:px-4">
        {/* <div className="flex flex-col">
          {Array.from({ length: loopLength }, (_, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              {newText[index] && newText[index].type === "text" && (
                <div
                  className={`md:w-1/2 w-full p-4 ${
                    index % 2 === 0 ? "order-last" : "order-first"
                  }  `}
                >
                  <p className="text-p-lg text-darkblue font-palanquin ">
                    {newText[index].content}
                  </p>
                </div>
              )}
              {newImages[index] && newImages[index].type === "image" && (
                <div className="w-full md:w-1/2 p-4">
                  <Image
                    src={newImages[index].content}
                    alt={`image-${index}`}
                    className=" object-contain z-20 rounded-3xl "
                    width={500}
                    height={300}
                  />
                </div>
              )}
            </div>
          ))}
        </div> */}
        {/* {translation.Blog.blogs[id].pdf.title && (
          <a
            href={translation.Blog.blogs[id].pdf.document}
            target="_blank"
            rel="noopener noreferrer"
            className="text-p-lg text-darkblue font-palanquin font-bold underline mt-8 ml-4"
          >
            {translation.Blog.blogs[id].pdf.title}
          </a>
        )} */}
      </div>
    </main>
  );
}
