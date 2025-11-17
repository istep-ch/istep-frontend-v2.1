import Team from "@/components/about/team/team";

export default async function teamsOverview({ teamOverview }: any) {
  return (
    <>
      <div className="mt-12">
        <Team
          team={teamOverview[0].teamMembers}
          themeText="rgb(25 40 71)"
          theme="darkblue"
          color="rgb(25 40 71 / 0)"
          title={teamOverview[0].teamTitle}
          readMore={teamOverview[0].readMore}
        />
      </div>

      <div className="mt-16">
        <Team
          team={teamOverview[1].teamMembers}
          themeText="rgb(37 146 111)"
          theme="green"
          color="rgb(37 146 111 / 0)"
          title={teamOverview[1].teamTitle}
          readMore={teamOverview[1].readMore}
        />
      </div>
      <div className="mt-16">
        <Team
          team={teamOverview[2].teamMembers}
          themeText="rgb(248 179 68)"
          theme="yellow"
          color="rgb(248 179 68 / 0)"
          title={teamOverview[2].teamTitle}
          readMore={teamOverview[2].readMore}
        />
      </div>
    </>
  );
}
