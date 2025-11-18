import Image from "next/image";

import ScrollDown from "@/components/general/scrollDown/scrollDown";
import DigitalSkills from "@/components/ourKnowHow/digitalSkills/digitalSkills";

import { gql, request } from "graphql-request";
import { getLocale } from "next-intl/server";

const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

const fetchOurKnowledgeQuery = gql`
  query FetchOurKnowledge($language: String!) {
    allOurKnowledge(where: { language: { eq: $language } }) {
      _id
      titlePreview {
        title
        subtitle
        image {
          asset {
            url
          }
        }
      }
      skillsSection {
        title
        text
        skill {
          title
          textRaw
        }
      }
    }
  }
`;

async function fetchOurKnowledge(language: string) {
  try {
    const data: any = await request(endpoint, fetchOurKnowledgeQuery, {
      language,
    });
    return data.allOurKnowledge ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function OurKnowHow({}) {
  const locale = await getLocale();
  const ourKnowledgeData = await fetchOurKnowledge(locale);

  return (
    <main>
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {ourKnowledgeData[0]?.titlePreview?.title}
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 w-full">
              <h4 className="text-white text-h-sm md:text-h-md mt-4 mb-4  md:text-left text-center font-palanquin !font-thin">
                {ourKnowledgeData[0]?.titlePreview?.subtitle}
              </h4>
            </div>
            <div className="lg:w-3/5 w-full flex justify-center">
              <Image
                src={ourKnowledgeData[0]?.titlePreview?.image?.asset?.url}
                alt="Picture of the author"
                className="h-[420px] w-full object-contain "
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

      <div className="container mx-auto md:pt-18 pt-12 px-8 lg:px-4 pb-32">
        {ourKnowledgeData[0]?.skillsSection.map((item: any, index: number) => (
          <DigitalSkills skillsSection={item} />
        ))}
      </div>
    </main>
  );
}
