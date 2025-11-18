import DigitalSkillsElement from "@/components/ourKnowHow/digitalSkillsElement/digitalSkillsElement";

export default async function DigitalSkills({ skillsSection }: any) {
  console.log("skillsSection", skillsSection.skill);
  return (
    <>
      <div>
        <div className="font-palanquin text-orange">
          <h3 className="text-h-md md:text-h-lg ">{skillsSection.title}</h3>

          <p className="text-p-lg md:text-h-sm font-thin ">
            {skillsSection.text}
          </p>
        </div>
        <div className="mt-8">
          {skillsSection.skill.map((item: any, index: number) => (
            <div key={index} className="mb-6">
              <DigitalSkillsElement
                text={item.textRaw}
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
