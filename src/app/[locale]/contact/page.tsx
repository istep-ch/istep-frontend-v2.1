import Image from "next/image";
import titleImage from "@/assets/aboutUs/titleImage.png";
import FormComp from "@/components/contact/form/form";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import ScrollDown from "@/components/general/scrollDown/scrollDown";

import { gql, request } from "graphql-request";
import { getLocale } from "next-intl/server";
import { c } from "@apollo/client/react/internal/compiler-runtime";

const endpoint = process.env.SANITY_GRAPHQL_ENDPOINT || "";

const fetchAboutPageQuery = gql`
  query FetchAbout($language: String!) {
    allContact(where: { language: { eq: $language } }) {
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
      lastName
      firstName
      email
      message
      inquiryType
      inquiryOptions
      buttonText
    }
  }
`;

async function fetchAbout(language: string) {
  try {
    const data: any = await request(endpoint, fetchAboutPageQuery, {
      language,
    });
    return data.allContact ?? [];
  } catch (error) {
    console.error("GraphQL fetch error:", error);
    return [];
  }
}

export default async function Contact({}: any) {
  const locale = await getLocale();
  const contactData = await fetchAbout(locale);

  return (
    <main className=" z-10">
      <div className="min-h-[calc(100vh-80px)] mt-[80px] md:mt-0 md:min-h-[calc(100vh-0px)] bg-darkblue w-full flex items-center pb-8 md:-pd-0">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <h1 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center">
            {contactData[0]?.titlePreview?.title}
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 w-full">
              <h4 className="text-white text-h-sm md:text-h-md mt-4 mb-4  md:text-left text-center font-palanquin !font-thin">
                {contactData[0]?.titlePreview?.subtitle}
              </h4>
            </div>
            <div className="lg:w-3/5 w-full flex justify-center">
              <Image
                src={contactData[0]?.titlePreview?.image?.asset?.url}
                alt={contactData[0]?.titlePreview?.title || "Contact Image"}
                className="h-108 object-contain "
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="hidden md:block">
            <ScrollDown />
          </div>
        </div>
      </div>
      <FormComp lng={locale} contactData={contactData[0]} />
    </main>
  );
}
