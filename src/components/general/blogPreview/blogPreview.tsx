import Image, { StaticImageData as NextImageProps } from "next/image";

import { unstable_setRequestLocale } from "next-intl/server";

export default async function blogPreview({ lng }: any) {
  unstable_setRequestLocale(lng);
  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <>
      <div className="rounded-3xl bg-white">
        <div
          className={`bg-green/20 rounded-3xl font-palanquin flex flex-1 md:flex-row flex-col`}
        >
          <div className="w-full md:w-1/2 md:p-12 md:pr-0 p-6">
            <h3
              className={`text-h-sm md:text-h-md  mb-2 md:mb-4`}
              style={{ color: "#25926F" }}
            >
              {translation.Blog.blogs[0].title}
            </h3>
            <p
              className={`text-p-sm md:text-p-lg text-darkblue font-thin w-full md:w-4/5 mb-1 md:mb-2`}
            >
              {translation.Blog.blogs[0].text}
            </p>
            <p
              className={`text-p-sm md:text-p-sm text-darkblue !font-bold w-full md:w-4/5 mb-2 md:mb-4`}
            >
              {translation.Blog.blogs[0].date}
            </p>
            <div className="flex items-center cursor-pointer">
              <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
              <a
                href={"/" + lng + "/blog/" + 0}
                className="text-p-sm md:text-p-lg !font-bold text-darkblue"
              >
                {translation.Blog.blogs[0].moreText}
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-first md:order-last">
            <Image
              src={translation.Blog.blogs[0].images[0]}
              width={500}
              height={500}
              alt={translation.Blog.blogs[0].title}
              className="h-full object-cover w-full md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-none rounded-tr-3xl rounded-tl-3xl md:rounded-tl-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
