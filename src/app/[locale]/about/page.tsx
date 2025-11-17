import Image from "next/image";
import titleImage from "@/assets/aboutUs/titleImage.png";
import HowIsIstep from "@/components/about/howIsIstep/howIsIstep";
import TeamsOverview from "@/components/about/teamsOverview/teamsOverview";
import OurVision from "@/components/general/ourVision/ourVision";
import OurValues from "@/components/general/ourValues/ourValues";

import { gql, request } from "graphql-request";
import { getLocale } from "next-intl/server";

import ScrollDown from "@/components/general/scrollDown/scrollDown";

const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

const fetchAboutPageQuery = gql`
  query FetchAbout($language: String!) {
    allAboutUsPage(where: { language: { eq: $language } }) {
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
      whoAreWe {
        title
        subtitle
        text
        image {
          asset {
            url
          }
        }
      }
      teamOverview {
        teamTitle
        readMore
        teamMembers {
          title
          text
          image {
            asset {
              url
            }
          }
        }
      }
      ourVision {
        title
        visionValuesItems {
          title
          text
          image {
            asset {
              url
            }
          }
        }
      }
      ourValues {
        _id
        title
        visionValuesItems {
          title
          text
          image {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

async function fetchAbout(language: string) {
  try {
    const data: any = await request(endpoint, fetchAboutPageQuery, {
      language,
    });
    return data.allAboutUsPage ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function AboutUs({}) {
  const locale = await getLocale();
  const aboutData = await fetchAbout(locale);
  return (
    <main className="">
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 pt-32 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {aboutData[0]?.titlePreview?.title}
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 w-full">
              <h4 className="text-white text-h-sm md:text-h-md mt-4 mb-4  md:text-left text-center font-palanquin !font-thin">
                {aboutData[0]?.titlePreview?.subtitle}
              </h4>
            </div>
            <div className="lg:w-3/5 w-full flex justify-center">
              <Image
                src={titleImage}
                alt="Picture of the author"
                className="h-108 object-contain "
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <ScrollDown />
        </div>
      </div>

      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <HowIsIstep whoAreWe={aboutData[0]?.whoAreWe} />
      </div>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <TeamsOverview teamOverview={aboutData[0]?.teamOverview} />
      </div>
      {/* <div>
        <OurVision lng={locale} />
      </div> */}
      {/* <div>
        <OurValues lng={locale} />
      </div> */}
    </main>
  );
}
