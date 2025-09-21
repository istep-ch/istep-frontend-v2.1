import Filters from "@/components/coursesDetails/filters/filters";
import CoursePreviewBox from "@/components/coursesDetails/coursePreviewBox/coursePreviewBox";

import { setRequestLocale } from "next-intl/server";

interface projectProps {
  lng: string;
}

export default async function coursesOverviewMultimedia({ lng }: projectProps) {
  setRequestLocale(lng);

  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;
  return (
    <>
      {/* <div className="flex justify-end">
        <Filters ourCourses={translation.MultimediaCourses.ourCourses} />
      </div> */}

      <div className="w-full font-palanquin">
        <h3 className="text-h-md md:text-h-lg  mb-6 md:mb-8 text-darkblue">
          {translation.MultimediaCourses.ourCourses.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {translation.MultimediaCourses.courses.map(
            (course: any, index: number) => (
              <CoursePreviewBox course={course} key={index} idx={index} />
            )
          )}
        </div>
      </div>
    </>
  );
}
