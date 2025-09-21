import TeaserIntroText from "@/components/general/teaserIntroText/teaserIntroText";
import BlogPreview from "@/components/general/blogPreview/blogPreview";
import image from "@/assets/placeholder/project.png";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";

import { useTranslations } from "next-intl";

export default async function BlogTeaser({ lng, blog }: any) {
  setRequestLocale(lng);
  const t = useTranslations("Home.blog");

  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
        <TeaserIntroText
          title={t("title")}
          subTitle={t("subTitle")}
          text={t("text")}
          theme={"#25926F"}
        />
        <div className="mt-8 ">
          <BlogPreview
            blog={blog}
            moreText={translation.Blog.moreText}
            theme={"#25926F"}
            image={blog.image.asset.url}
            lng={lng}
          />
        </div>
        <div className="flex md:justify-end justify-center">
          <Link href={lng + "/blog"}>
            <button
              type="button"
              className="rounded-full font-palanquin bg-green/80 md:mt-8 mt-4 ml-0  px-10 py-2.5 text-sm font-semibold text-white focus-visible:outline hover:scale-105 transition-all duration-300"
            >
              {t("buttonText")}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
