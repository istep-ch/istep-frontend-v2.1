import Image from "next/image";
import ProjectOverview from "@/components/projects/projectOverview/projectOverview";
import ScrollDown from "@/components/general/scrollDown/scrollDown";
import { gql, request } from "graphql-request";
import { getLocale } from "next-intl/server";

const endpoint =
  "https://tqdbr6o1.api.sanity.io/v2023-08-01/graphql/develop/default";

const fetchProjectSite = gql`
  query FetchProjectSite($language: String!) {
    allOurProjectsPage(where: { language: { eq: $language } }) {
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
      projects {
        title
        text
        image {
          asset {
            url
          }
        }
      }
      buttonReadMore
    }
  }
`;

async function fetchProjectsPageList(language: string) {
  try {
    const data: any = await request(endpoint, fetchProjectSite, {
      language,
    });
    return data.allOurProjectsPage ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function Projects({}) {
  const locale = await getLocale();

  const project = await fetchProjectsPageList(locale);

  return (
    <main>
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {project[0].titlePreview.title}
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 w-full">
              <h4 className="text-white text-h-sm md:text-h-md mt-4 mb-4  md:text-left text-center font-palanquin !font-thin">
                {project[0].titlePreview.subtitle}
              </h4>
            </div>
            <div className="lg:w-3/5 w-full flex justify-center">
              <Image
                src={project[0].titlePreview.image.asset.url}
                width={420}
                height={420}
                alt={project[0].titlePreview.title}
                className="object-contain h-[420px] w-full"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <ScrollDown />
        </div>
      </div>
      <ProjectOverview
        projects={project[0].projects}
        moreText={project[0].buttonReadMore}
      />
    </main>
  );
}
