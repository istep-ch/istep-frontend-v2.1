import Image, { StaticImageData as NextImageProps } from "next/image";
import { truncate } from "@/utils/truncate";
import Link from "next/link";

interface BlogTeaserSmallProps {
  title: string;
  text: string;
  date: string;
  moreText: string;
  idx: number;
  image: string;
  lng: string;
}

export default function blogTeaserSmall({
  title,
  text,
  date,
  moreText,
  image,
  idx,
  lng,
}: BlogTeaserSmallProps) {
  const bgColorOptions = ["#E07200", "#F8B344", "#25926F"];
  const bgColorOptions2 = [
    "rgb(242 196 148 / 0)",
    "rgb(252 223 177 / 0)",
    "rgb(164 209 195 / 0)",
  ];

  const bgColorStyle = {
    "--tw-gradient-from":
      bgColorOptions[idx % bgColorOptions.length] +
      " var(--tw-gradient-from-position)",
    "--tw-gradient-to":
      bgColorOptions2[idx % bgColorOptions2.length] +
      " var(--tw-gradient-to-position)",
    "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)",
  };
  const theme = bgColorOptions[idx % bgColorOptions.length];

  const textBlog = truncate(text, 220);

  return (
    <>
      <div className="min-h-96 bg-white w-full rounded-3xl shadow-lg">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            className="rounded-t-3xl !w-full !max-h-96 !object-cover"
            width={500}
            height={300}
          />
          <div
            className={`bg-gradient-to-t absolute bottom-0 w-full h-auto`}
            //@ts-ignore
            style={bgColorStyle}
          >
            <h4 className="text-white text-h-md md:text-h-l font-palanquin mt-10 md:mt-4 ml-10 md:font-normal mb-6">
              {title}
            </h4>
          </div>
        </div>
        <div className="p-5  font-palanquin">
          <div className="flex-1 flex">
            <div
              className={`inline-block w-[12px] self-stretch  opacity-100 dark:opacity-50 `}
              style={{ backgroundColor: theme }}
            />
            <p className="ml-4">{textBlog}</p>
          </div>
          <p className="ml-5 mt-1 font-bold">{date}</p>
          <Link href={`/${lng}/blog/${idx}`}>
            <button
              type="button"
              className={`rounded-full mt-4 ml-5 px-10 py-2.5 text-sm font-semibold text-white focus-visible:outline hover:scale-105 transition-all duration-300`}
              style={{ backgroundColor: theme }}
            >
              {moreText}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
