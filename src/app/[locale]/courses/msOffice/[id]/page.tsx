import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return [
    { locale: "de", id: "0" },
    { locale: "de", id: "1" },

    { locale: "en", id: "0" },
    { locale: "en", id: "1" },
  ];
}

export default async function detailPage({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) {
  setRequestLocale(locale);
  const translation = (
    await import(`../../../../../../locales/${locale}/${locale}.json`)
  ).default;
  const course = translation.OfficeCourses.courses[id];
  return (
    <main className="">
      <div className="bg-darkblue pb-16">
        <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 ">
          <div className="rounded-full bg-yellow p-2 w-36 text-p-sm text-darkblue font-bold font-palanquin mb-8">
            <p className="text-center">{course.badge}</p>
          </div>
          <h3 className="lg:text-h-xl  text-h-l  text-yellow font-palanquin md:text-left text-center mb-4 whitespace-pre-line">
            {course.title}
          </h3>
          <p className="text-white max-w-5xl font-palanquin text-p-lg md:text-h-xs">
            {course.description}
          </p>
        </div>
      </div>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4 font-palanquin">
        <div className="">
          <h4 className="lg:text-h-l  text-h-md  text-darkblue  md:text-left text-center mb-4 whitespace-pre-line">
            {course.whatYouLearnTitle}
          </h4>
          <p className="text-p-lg md:text-h-xs text-darkblue mb-6">
            {course.whatYouLearnText}
          </p>
          <ul className=" list-disc ml-8 text-p-lg md:text-h-xs text-darkblue ">
            {course.whatYouLearnList.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <h4 className="lg:text-h-l  text-h-md  text-darkblue  md:text-left text-center mb-4 whitespace-pre-line">
            {course.workpiecesTitle}
          </h4>

          <ul className=" list-disc ml-8 text-p-lg md:text-h-xs text-darkblue ">
            {course.workpiecesList.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <h4 className="lg:text-h-l  text-h-md  text-darkblue  md:text-left text-center mb-4 whitespace-pre-line">
            {course.courseOrganizationTitle}
          </h4>
          <p className="text-p-lg md:text-h-xs text-darkblue">
            {course.courseOrganizationText}
          </p>
        </div>
        <div className="mt-12">
          <h4 className="lg:text-h-l  text-h-md  text-darkblue  md:text-left text-center mb-4 whitespace-pre-line">
            {course.requirementsTitle}
          </h4>

          <ul className=" list-disc ml-8 text-p-lg md:text-h-xs text-darkblue ">
            {course.requirementsList.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
