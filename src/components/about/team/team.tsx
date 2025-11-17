import TeamMember from "@/components/general/teamMember/teamMember";

export default function team({
  team,
  title,
  theme,
  themeText,
  color,
  readMore,
}: any) {
  return (
    <>
      <div className={` font-palanquin`} style={{ color: themeText }}>
        <h3 className={`text-h-md md:text-h-lg  mb-2 md:mb-4`}>{title}</h3>
      </div>

      <div className="grid md:grid-cols-3 gird-cols-1 gap-8 md:mt-8 mt-4">
        {team.map((member: any, index: number) => (
          <div key={index}>
            <TeamMember
              moreText={readMore}
              text={member.text}
              name={member.title}
              image={member.image.asset.url}
              theme={theme}
              color={color}
            />
          </div>
        ))}
      </div>
    </>
  );
}
