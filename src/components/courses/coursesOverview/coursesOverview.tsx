import CoursesTeaserElement from "@/components/general/courseTeaserElement/courseTeaserElement";

export default async function coursesOverview({ ourCoursesSection, lng }: any) {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-8 md:mt-12 mt-4">
      {ourCoursesSection.map((item: any, index: number) => (
        <div key={index} className="mb-12">
          <CoursesTeaserElement
            key={index}
            index={index}
            image={item.image?.asset?.url}
            title={item.title}
            text={item.moreText}
            lng={"/" + lng}
            link={"/courses/" + item.link}
            linkActive={true}
          />
        </div>
      ))}
    </div>
  );
}
