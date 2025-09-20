import Image, { StaticImageData as NextImageProps } from "next/image";

import { convertDate } from "@/utils/convertDate";

export default async function blogPreview({ blog, moreText }: any) {
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
              {blog.title}
            </h3>
            <p
              className={`text-p-sm md:text-p-lg text-darkblue font-thin w-full md:w-4/5 mb-1 md:mb-2`}
            >
              {blog.subtitle}
            </p>
            <p
              className={`text-p-sm md:text-p-sm text-darkblue !font-bold w-full md:w-4/5 mb-2 md:mb-4`}
            >
              {convertDate(blog.date)}
            </p>
            <div className="flex items-center cursor-pointer">
              <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
              <a
                href={"/" + "de" + "/blog/" + blog._id}
                className="text-p-sm md:text-p-lg !font-bold text-darkblue"
              >
                {/* fix */}
                {moreText}
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-first md:order-last">
            <Image
              src={blog.image.asset.url}
              width={500}
              height={500}
              alt={blog.title}
              className="h-full object-cover w-full md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-none rounded-tr-3xl rounded-tl-3xl md:rounded-tl-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
