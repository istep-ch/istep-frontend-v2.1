import CoursesTeaserElement from "@/components/general/courseTeaserElement/courseTeaserElement";

export default async function CoursesTeaser({
  locale,

  ourCourses,
}: any) {
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
      <div className="bg-yellow/40 md:py-24  ">
        <div className=" py-12 px-8 lg:px-4 container mx-auto">
          <div className="font-palanquin">
            <h3 className="text-h-md md:text-h-lg text-orange mb-2 md:mb-4">
              {ourCourses.title}
            </h3>
            <p className="text-p-lg md:text-h-md text-orange w-full md:w-3/5 mb-2 md:mb-4">
              {ourCourses.subtitle}
            </p>
            <p className="w-full md:w-1/2 mb-2 text-darkblue text-p-sm md:text-p-lg">
              {ourCourses.text}
            </p>
          </div>

          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-8 md:mt-12 mt-4">
            {ourCourses.courses.map((item: any, index: number) => (
              <CoursesTeaserElement
                key={index}
                image={item.image.asset.url}
                bgColor={getColor(index)}
                imagePosition={item.imagePosition}
                title={item.title}
                text={item.moreText}
                lng={locale}
                link={"/courses/" + item.title}
                linkActive={true}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
