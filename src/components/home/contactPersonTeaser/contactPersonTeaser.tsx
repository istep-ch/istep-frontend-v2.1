import TeamMember from "@/components/general/teamMember/teamMember";

import Link from "next/link";

export default async function ContactPersonTeaser({
  contactPerson,
  locale,
}: any) {
  return (
    <div className="md:py-24 py-12   ">
      <div className="font-palanquin text-orange mb-8 md:mb-16">
        <h3 className="text-h-md md:text-h-lg ">{contactPerson.title}</h3>
        <p className="text-p-lg md:text-h-md w-9/12">
          {contactPerson.subtitle}
        </p>
      </div>
      <div className="md:flex block">
        <div className="md:w-1/3 w-full ">
          <TeamMember
            name={contactPerson.person[0].title}
            image={contactPerson.person[0].image.asset.url}
            text={contactPerson.person[0].text}
            moreText={"translation.TeamMember.swiss[0].moreText"}
            theme="darkblue"
            color="rgb(248 179 68 / 0)"
          />
        </div>
        <div className="md:w-2/3 w-full md:flex flex-col justify-center font-palanquin md:ml-12 ml-0 mt-8 md:mt-0 text-darkblue">
          <p className="md:text-h-sm text-p-lg mb-2 md:font-normal font-bold">
            {contactPerson.personTitle}
          </p>
          <p className="w-full md:w-2/3 mb-2 text-p-sm md:text-p-lg text-darkblue">
            {contactPerson.personText}
          </p>

          <div className="flex items-center cursor-pointer">
            <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
            <p className="text-p-sm md:text-p-lg text-darkblue">
              {contactPerson.personEmail}
            </p>
          </div>
          <div className="flex items-center cursor-pointer">
            <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
            <p className="text-p-sm md:text-p-lg text-darkblue">
              {contactPerson.personTelephone}
            </p>
          </div>

          <div className="w-full flex justify-start">
            <Link href={locale + `/about`}>
              <button
                type="button"
                className="rounded-full bg-yellow mt-4 ml-0 px-10 py-2.5 text-sm text-white focus-visible:outline hover:scale-105 transition-all duration-300"
              >
                {contactPerson.textButton}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
