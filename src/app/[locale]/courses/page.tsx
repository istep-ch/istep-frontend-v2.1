import Image from "next/image";

import CoursesOverview from "@/components/courses/coursesOverview/coursesOverview";

import ScrollDown from "@/components/general/scrollDown/scrollDown";

import { gql, request } from "graphql-request";
import { getLocale } from "next-intl/server";

const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

const fetchOurCoursesQuery = gql`
  query FetchOurCourses($language: String!) {
    allOurCourses(where: { language: { eq: $language } }) {
      titlePreview {
        title
        subtitle
        image {
          asset {
            url
          }
        }
      }
      ourCoursesSection {
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
  }
`;
async function fetchOurCourses(language: string) {
  try {
    const data: any = await request(endpoint, fetchOurCoursesQuery, {
      language,
    });
    return data.allOurCourses ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function Courses({}) {
  const locale = await getLocale();
  const ourCourses = await fetchOurCourses(locale);
  return (
    <main className="z-10">
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {ourCourses[0]?.titlePreview?.title}
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 w-full">
              <h4 className="text-white text-h-sm md:text-h-md mt-4 mb-4  md:text-left text-center font-palanquin !font-thin">
                {ourCourses[0]?.titlePreview?.subtitle}
              </h4>
            </div>
            <div className="lg:w-3/5 w-full flex justify-center">
              <Image
                src={ourCourses[0]?.titlePreview?.image?.asset?.url}
                alt="Picture of the author"
                className="h-108 object-contain "
                width={500}
                height={420}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <ScrollDown />
        </div>
      </div>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <CoursesOverview
          ourCoursesSection={ourCourses[0]?.ourCoursesSection}
          lng={locale}
        />
      </div>
    </main>
  );
}
