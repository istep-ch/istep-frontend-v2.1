import { gql, request } from "graphql-request";
import { getLocale } from "next-intl/server";
import { PortableText } from "@portabletext/react";

const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

const fetchCourseQuery = gql`
  query FetchCourse($language: String!, $courseTitle: String!) {
    allIndividualCourse(
      where: { language: { eq: $language }, title: { eq: $courseTitle } }
    ) {
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
`;

async function fetchCourse(language: string, courseTitle: string) {
  try {
    const data: any = await request(endpoint, fetchCourseQuery, {
      language,
      courseTitle,
    });
    return data.allIndividualCourse ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function detailPage({ params }: { params: any }) {
  const locale = await getLocale();

  const courseId = params.id.replace(/-/g, " ").replace(/%3A/g, ":");

  const course = await fetchCourse(locale, courseId);

  return (
    <main className="">
      <div className="bg-darkblue pb-16">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <div className="rounded-full bg-yellow p-2 w-36 text-p-sm text-darkblue font-bold font-palanquin mb-8">
            <p className="text-center">{course[0].tag}</p>
          </div>
          <h3 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center mb-4 whitespace-pre-line">
            {course[0].title}
          </h3>
          <p className="text-white max-w-5xl font-palanquin text-p-lg md:text-h-xs">
            {course[0].text}
          </p>
        </div>
      </div>

      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 font-palanquin">
        <div className="">
          <h4 className="lg:text-h-l  text-h-md  text-darkblue  md:text-left text-center mb-4 whitespace-pre-line">
            {course.whatYouLearnTitle}
          </h4>
          <p className="text-p-lg md:text-h-xs text-darkblue mb-6">
            {course.whatYouLearnText}
          </p>
          <ul className=" list-disc ml-8 text-p-lg md:text-h-xs text-darkblue ">
            {course[0].courseDescriptionBlocks.map(
              (item: any, index: number) => (
                <div key={index} className="mb-4">
                  <h5 className="lg:text-h-l  text-h-md  text-darkblue  md:text-left text-center mb-4 whitespace-pre-line">
                    {item.title}
                  </h5>
                  <PortableText
                    value={item.textRaw}
                    components={{
                      list: ({ children, value }) => {
                        if (value.listItem === "bullet") {
                          return <ul className="list-disc pl-5">{children}</ul>;
                        }
                        if (value.listItem === "number") {
                          return (
                            <ol className="list-decimal pl-5">{children}</ol>
                          );
                        }
                        return <ul className="pl-5">{children}</ul>;
                      },
                      listItem: ({ children }) => (
                        <li className="mb-1">{children}</li>
                      ),
                    }}
                  />
                </div>
              )
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
