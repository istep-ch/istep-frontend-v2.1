import Filters from "@/components/coursesDetails/filters/filters";
import CoursePreviewBox from "@/components/coursesDetails/coursePreviewBox/coursePreviewBox";

export default async function coursesOverviewDetail({
  individualCourseLearnMore,
  individualCourse,
  title,
}: any) {
  return (
    <>
      {/* <div className="flex justify-end">
        <Filters ourCourses={translation.ComputerScienceCourses.ourCourses} />
      </div> */}

      <div className="w-full font-palanquin">
        <h3 className="text-h-md md:text-h-lg  mb-6 md:mb-8 text-darkblue">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {individualCourse.map((course: any, index: number) => (
            <CoursePreviewBox
              course={course}
              key={index}
              idx={index}
              individualCourseLearnMore={individualCourseLearnMore}
            />
          ))}
        </div>
      </div>
    </>
  );
}
