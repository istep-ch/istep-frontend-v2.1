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
import { getTranslations } from "next-intl/server";
import { gql, request } from "graphql-request";

const imagesCourses = [ITImage, MultimediaImage, MSOfficeImage, DiverseKurse];

interface HomeProps {
  params: {
    locale: string;
  };
}

const endpoint =
  "https://tqdbr6o1.api.sanity.io/v2023-08-01/graphql/develop/default";

const fetchProductsListQuery = gql`
  query FetchProductsList($language: String!) {
    allBlog(
      where: { language: { eq: $language } }
      sort: { date: DESC }
      limit: 1
    ) {
      _id
      title
      subtitle
      date
      image {
        asset {
          url
        }
      }
      namepdf
      pdf {
        asset {
          url
        }
      }
    }
  }
`;

async function fetchProductsList(language: string) {
  try {
    const data = await request(endpoint, fetchProductsListQuery, { language });
    return data.allBlog ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function HomePage({ params }: HomeProps) {
  const { locale } = params;

  const t = await getTranslations("Home");
  const blogs = await fetchProductsList(locale);

  console.log(blogs[0]);
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
              alt="Title"
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
        <CoursesTeaser lng={locale} imagesCourses={imagesCourses} />
      </div>
      <div>
        <CourseResultsTeaser lng={locale} />
      </div>
      <div>
        <BlogTeaser lng={locale} blog={blogs[0]} />
      </div>
    </main>
  );
}
