import Image from "next/image";
import CoursesOverviewDetail from "@/components/courses/coursesOverview/coursesOverviewDetail";
import MoreCoursesCarousel from "@/components/general/moreCoursesCarousel/moreCoursesCarousel";

import { gql, request } from "graphql-request";
import { getLocale } from "next-intl/server";

const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

const fetchCourseQuery = gql`
  query FetchCourse($language: String!, $courseTitle: String!) {
    allCourse(
      where: { language: { eq: $language }, link: { eq: $courseTitle } }
    ) {
      title
      subtitle
      link
      image {
        asset {
          url
        }
      }
      individualCourseLearnMore
      individualCourse {
        title
        text
        courseLocation

        tag
        courseDescriptionBlocks {
          title
          textRaw
        }
      }
    }
  }
`;

async function fetchCourse(language: string, courseTitle: string) {
  try {
    const data: any = await request(endpoint, fetchCourseQuery, {
      language,
      courseTitle,
    });
    return data.allCourse ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function MSOfficeCourses({}: any) {
  const locale = await getLocale();
  const course = await fetchCourse(locale, "msOffice");

  return (
    <main>
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {course[0].title}
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 w-full">
              <h4 className="text-white text-h-sm md:text-h-md mt-4 mb-4  md:text-left text-center font-palanquin !font-thin">
                {course[0].subtitle}
              </h4>
            </div>
            <div className="lg:w-3/5 w-full flex justify-center">
              <Image
                src={course[0].image?.asset?.url}
                alt={course[0].title}
                className="h-full object-contain h-108"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <CoursesOverviewDetail
          individualCourse={course[0].individualCourse}
          individualCourseLearnMore={course[0].individualCourseLearnMore}
          title={course[0].title}
        />
      </div>
      {/* <div className="mb-24">
        <MoreCoursesCarousel />
      </div> */}
    </main>
  );
}
