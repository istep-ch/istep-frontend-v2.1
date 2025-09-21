import CoursesTeaserElement from "@/components/general/courseTeaserElement/courseTeaserElement";

import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
interface ourCoursesProps {
  imagesCourses: [];
  lng: string;
}

export default async function CoursesTeaser({
  lng,
  imagesCourses,
}: ourCoursesProps) {
  setRequestLocale(lng);
  const t = useTranslations("Home.ourCourses");
  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <>
      <div className="bg-yellow/40 md:py-24  ">
        <div className=" py-12 px-8 lg:px-4 container mx-auto">
          <div className="font-palanquin">
            <h3 className="text-h-md md:text-h-lg text-orange mb-2 md:mb-4">
              {t("title")}
            </h3>
            <p className="text-p-lg md:text-h-md text-orange w-full md:w-3/5 mb-2 md:mb-4">
              {t("subTitle")}
            </p>
            <p className="w-full md:w-1/2 mb-2 text-darkblue text-p-sm md:text-p-lg">
              {t("text")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-8 md:mt-12 mt-4">
            {translation.Courses.map((item: any, index: number) => (
              <CoursesTeaserElement
                key={index}
                image={imagesCourses[index]}
                bgColor={item.backgroundColor}
                imagePosition={item.imagePosition}
                title={item.title}
                text={item.moreText}
                lng={lng}
                link={"/courses/" + item.link}
                linkActive={true}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
