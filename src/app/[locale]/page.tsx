import Image from "next/image";
import titleImage from "../../assets/home/titleImage.png";
import OurProjects from "@/components/home/ourProjects/ourProjects";
import WhatWeDo from "@/components/home/whatWeDo/whatWeDo";
import ContactPersonTeaser from "@/components/home/contactPersonTeaser/contactPersonTeaser";
import CoursesTeaser from "@/components/home/coursesTeaser/coursesTeaser";
import CourseResultsTeaser from "@/components/home/courseResultsTeaser/courseResultsTeaser";
import BlogTeaser from "@/components/home/blogTeaser/blogTeaser";

// Images
import ITImage from "@/assets/general/coursesIcons/IT.png";
import MultimediaImage from "@/assets/general/coursesIcons/multimedia.png";
import MSOfficeImage from "@/assets/general/coursesIcons/MS-office.png";
import DiverseKurse from "@/assets/general/coursesIcons/diverse_kurse.png";
import ScrollDown from "@/components/general/scrollDown/scrollDown";

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { gql, request } from "graphql-request";

const imagesCourses = [ITImage, MultimediaImage, MSOfficeImage, DiverseKurse];

interface HomeProps {
  params: {
    locale: string;
  };
}

const endpoint = "https://vercel.saleor.cloud/graphql/";

const fetchProductsListQuery = gql`
  query FetchProductsList {
    products(first: 10, channel: "default-channel") {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

async function fetchProductsList() {
  try {
    const data = await request(endpoint, fetchProductsListQuery);
    return data.products.edges.map((edge: any) => edge.node);
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default function HomePage({ params: { locale } }: HomeProps) {
  unstable_setRequestLocale(locale);

  fetchProductsList().then((products) => {
    console.log("asd", products); // Example usage
  });

  const t = useTranslations("Home");

  return (
    <main className="z-10">
      <div className="min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-0px)] bg-darkblue w-full pb-8 md:-pb-0 relative">
        <div className="w-full h-full pt-32 container mx-auto px-8 md:px-0">
          <div className="flex items-center justify-center flex-col h-2/5">
            <h1 className="lg:text-h-xl text-h-l text-yellow font-palanquin text-center">
              {t("mainTitle")}
            </h1>
            <h2 className="text-white text-h-xs md:text-h-sm w-full md:w-4/5 lg:w-3/5 mt-4 lg:mt-8 text-center font-palanquin">
              {t("subTitle")}
            </h2>
          </div>
          <div className="flex justify-center h-3/5 mt-8 md:mt-0">
            <Image
              src={titleImage}
              alt="Picture of the author"
              className="object-contain pt-2"
            />
          </div>
        </div>
        <ScrollDown />
      </div>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <WhatWeDo lng={locale} />
      </div>
      <div>
        <OurProjects lng={locale} />
      </div>
      <div className="container mx-auto px-8 lg:px-4">
        <ContactPersonTeaser lng={locale} />
      </div>
      <div>
        <CoursesTeaser lng={locale} imagesCourses={imagesCourses as any} />
      </div>
      <div>
        <CourseResultsTeaser lng={locale} />
      </div>
      <div>
        <BlogTeaser lng={locale} />
      </div>
    </main>
  );
}
