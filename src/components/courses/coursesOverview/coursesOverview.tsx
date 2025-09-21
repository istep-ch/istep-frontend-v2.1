import ProjectTeaser from "@/components/projects/projectTeaser/projectTeaser";
import CoursesTeaserElement from "@/components/general/courseTeaserElement/courseTeaserElement";

import { setRequestLocale } from "next-intl/server";

//images
import ITImage from "@/assets/general/coursesIcons/IT.png";
import MultimediaImage from "@/assets/general/coursesIcons/multimedia.png";
import MSOfficeImage from "@/assets/general/coursesIcons/MS-office.png";
import DiverseKurse from "@/assets/general/coursesIcons/diverse_kurse.png";

const imagesCourses = [ITImage, MultimediaImage, MSOfficeImage, DiverseKurse];

interface projectProps {
  lng: string;
}

export default async function coursesOverview({ lng }: projectProps) {
  setRequestLocale(lng);
  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-8 md:mt-12 mt-4">
      {translation.Courses.map((item: any, index: number) => (
        <div key={index} className="mb-12">
          <CoursesTeaserElement
            key={index}
            image={imagesCourses[index]}
            bgColor={item.backgroundColor}
            imagePosition={item.imagePosition}
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
