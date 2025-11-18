"use client";

import CoursesTeaserElement from "@/components/general/courseTeaserElement/courseTeaserElement";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function carousel({ results, locale }: any) {
  const color = [
    "rgb(224 114 0 / var(--tw-bg-opacity, 1));",
    "rgb(37 146 111 / var(--tw-bg-opacity, 1));",
    "rgb(248 179 68 / var(--tw-bg-opacity, 1));",
  ];
  const getColor = (idx: number) => {
    return color[idx % color.length];
  };
  return (
    <>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-8 ">
        {results.map((item: any, index: number) => (
          <div key={index}>
            <CoursesTeaserElement
              image={item.image.asset.url}
              bgColor={getColor(index)}
              imagePosition={item.imagePosition}
              title={item.title}
              text={item.moreText}
              link={"/" + item.link}
              lng={locale}
              linkActive={false}
            />
          </div>
        ))}
      </div>
    </>
  );
}
