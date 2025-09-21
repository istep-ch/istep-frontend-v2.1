import { setRequestLocale } from "next-intl/server";
import DigitalSkillsElement from "@/components/ourKnowHow/digitalSkillsElement/digitalSkillsElement";

export default async function DigitalSkills({ lng }: any) {
  setRequestLocale(lng);

  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <>
      <div>
        <div className="font-palanquin text-orange">
          <h3 className="text-h-md md:text-h-lg ">
            {translation.OurKnowHow.digitalSkills.title}
          </h3>

          <p className="text-p-lg md:text-h-sm font-thin ">
            {translation.OurKnowHow.digitalSkills.text}
          </p>
        </div>
        <div className="mt-8">
          {translation.OurKnowHow.elements.map((item: any, index: number) => (
            <div key={index} className="mb-6">
              <DigitalSkillsElement
                elements={item.list}
                title={item.title}
                idx={index}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
