import Image from "next/image";
import ScrollDown from "@/components/general/scrollDown/scrollDown";
import { gql, request } from "graphql-request";
import { convertDate } from "@/utils/convertDate";
const endpoint =
  "https://tqdbr6o1.api.sanity.io/v2023-08-01/graphql/develop/default";

const fetchBlogByIdQuery = gql`
  query AllBlogs($ID: ID!) {
    allBlog(where: { _id: { eq: $ID } }) {
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
      blogItemTexts {
        __typename
        ... on BlogItemText {
          _key
          textRaw
        }
        ... on BlogItemTextImageLeft {
          _key
          textRaw
          image {
            asset {
              url
            }
          }
        }
        ... on BlogItemTextImageRight {
          _key
          textRaw
          image {
            asset {
              url
            }
          }
        }
        ... on BlogItemImage {
          _key

          imageLeft {
            asset {
              url
            }
          }
          imageRight {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;
async function fetchBlogById(id: string) {
  try {
    const data: any = await request(endpoint, fetchBlogByIdQuery, { ID: id });
    return data.allBlog[0];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return null;
  }
}

export default async function detailPage(params: any) {
  const blog = await fetchBlogById(params.params.id);
  //console.log("blog", params.params.id);

  return (
    <main>
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] z-10 w-full pb-8 md:pb-0">
        <div className="bg-darkblue min-h-[calc(100vh-80px)]">
          <div className="container mx-auto md:pt-48 px-8 pt-8 lg:px-4 relative">
            <div className="md:w-2/3 w-full">
              <h1 className="lg:text-h-l text-h-md text-yellow font-palanquin md:text-left text-center">
                {blog ? blog.title : "Blog not found"}
              </h1>
              <p className="text-white text-h-xs md:text-h-sm mt-4 mb-4 md:text-left text-center font-palanquin !font-thin">
                {blog ? blog.subtitle : "Blog not found"}
              </p>
              <p className="text-white text-p-sm  mt-4 mb-4 md:text-left text-center font-palanquin !font-bold">
                {/* {translation.Blog.blogs[id].date} */}

                {blog ? convertDate(blog.date) : "Blog not found"}
              </p>
            </div>
          </div>
          <div className="container mx-auto py-12 md:mt-12 lg:px-4">
            <div className="w-full justify-end flex md:p-0 p-8">
              <Image
                src={blog?.image?.asset?.url || ""}
                alt={`Image of ${blog?.title || "Blog not found"}`}
                className="h-full object-contain md:w-1/2 w-full md:mr-16 z-20 rounded-3xl"
                width={500}
                height={300}
              />
            </div>
          </div>
          <ScrollDown />
        </div>
      </div>
      {/* <div className="md:pt-48 md:pb-24" /> */}
      <div className="container mx-auto py-12 md:mt-16 lg:px-4">
        <div className="flex flex-col">
          {blog?.blogItemTexts?.map((item: any, index: number) => {
            switch (item.__typename) {
              case "BlogItemText":
                return (
                  <div key={item._key} className="flex flex-col md:flex-row">
                    <div className="w-full p-4">
                      <p className="text-p-lg text-darkblue font-palanquin">
                        {item.textRaw?.[0]?.children?.[0]?.text || ""}
                      </p>
                    </div>
                  </div>
                );
              case "BlogItemTextImageLeft":
                return (
                  <div key={item._key} className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 w-full p-4 order-last md:order-first">
                      <p className="text-p-lg text-darkblue font-palanquin">
                        {item.textRaw?.[0]?.children?.[0]?.text || ""}
                      </p>
                    </div>
                    <div className="md:w-1/2 w-full p-4 order-first md:order-last">
                      <Image
                        src={item.image?.asset?.url || ""}
                        alt={`image-${index}`}
                        className="object-contain z-20 rounded-3xl"
                        width={500}
                        height={300}
                      />
                    </div>
                  </div>
                );
              case "BlogItemTextImageRight":
                return (
                  <div key={item._key} className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 w-full p-4">
                      <Image
                        src={item.image?.asset?.url || ""}
                        alt={`image-${index}`}
                        className="object-contain z-20 rounded-3xl"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="md:w-1/2 w-full p-4">
                      <p className="text-p-lg text-darkblue font-palanquin">
                        {item.textRaw?.[0]?.children?.[0]?.text || ""}
                      </p>
                    </div>
                  </div>
                );
              case "BlogItemImage":
                return (
                  <div key={item._key} className="flex flex-col md:flex-row">
                    {item.imageLeft?.asset?.url && (
                      <div className="md:w-1/2 w-full p-4">
                        <Image
                          src={item.imageLeft.asset.url}
                          alt={`imageLeft-${index}`}
                          className="object-contain z-20 rounded-3xl"
                          width={500}
                          height={300}
                        />
                      </div>
                    )}
                    {item.imageRight?.asset?.url && (
                      <div className="md:w-1/2 w-full p-4">
                        <Image
                          src={item.imageRight.asset.url}
                          alt={`imageRight-${index}`}
                          className="object-contain z-20 rounded-3xl"
                          width={500}
                          height={300}
                        />
                      </div>
                    )}
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        {blog.namepdf && (
          <a
            href={blog.pdf?.asset?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-p-lg text-darkblue font-palanquin font-bold underline mt-8 ml-4"
          >
            {blog.namepdf}
          </a>
        )}
      </div>
    </main>
  );
}
