import BlogPreview from "@/components/general/blogPreview/blogPreview";
import BlogOverview from "@/components/blog/blogOverview/blogOverview";
import ScrollDown from "@/components/general/scrollDown/scrollDown";

import { gql, request } from "graphql-request";
import { getTranslations } from "next-intl/server";
interface BlogProps {
  params: {
    locale: string;
  };
}
const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

const fetchProductsListQuery = gql`
  query FetchProductsList($language: String!) {
    allBlog(where: { language: { eq: $language } }) {
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
    const data: any = await request(endpoint, fetchProductsListQuery, {
      language,
    });
    return data.allBlog ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function Blog({ params }: BlogProps) {
  let blogs = await fetchProductsList(params.locale);
  blogs = blogs.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const t = await getTranslations("Blog");

  return (
    <main>
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <div>
            <div className="mt-6 text-white">
              <h1 className="lg:text-h-xl text-h-l text-green font-palanquin md:text-left text-center">
                {t("title")}
              </h1>
              <p className="text-white md:text-h-md text-h-sm !font-thin font-palanquin md:text-left text-center">
                {t("subTitle")}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <BlogPreview
              blog={blogs[0]}
              lng={params.locale}
              moreText={t("moreText")}
            />
          </div>
        </div>
        <div className="hidden md:block">
          <ScrollDown />
        </div>
      </div>

      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <BlogOverview
          blogs={blogs}
          lng={params.locale}
          moreText={t("moreText")}
        />
      </div>
    </main>
  );
}
