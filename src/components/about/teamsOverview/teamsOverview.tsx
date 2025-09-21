import Team from "@/components/about/team/team";

import ImageMatt from "@/assets/aboutUs/teamSwiss/istep_matt.jpg";
import ImageAdrian from "@/assets/aboutUs/teamSwiss/istep_adrian.jpg";
import ImageAline from "@/assets/aboutUs/teamSwiss/istep_aline.jpg";
import ImageDominic from "@/assets/aboutUs/teamSwiss/istep_dominic.jpg";
import ImageMaxim from "@/assets/aboutUs/teamSwiss/istep_maxim.png";
import ImageMichelle from "@/assets/aboutUs/teamSwiss/istep_michelle.jpg";
import ImageOlivia from "@/assets/aboutUs/teamSwiss/istep_olivia.jpg";
import ImageYannic from "@/assets/aboutUs/teamSwiss/istep_yannic.jpg";
import ImageSven from "@/assets/aboutUs/teamSwiss/istep_sven.jpg";
import ImageDeborah from "@/assets/aboutUs/teamSwiss/istep_deborah.jpg";
import ImageMarc from "@/assets/aboutUs/teamSwiss/istep_marc.png";
import ImageNadine from "@/assets/aboutUs/teamSwiss/istep_nadine.jpg";

import ImageIzabela from "@/assets/aboutUs/teamLezha/istep_izabela.jpg";

import ImageFabjan from "@/assets/aboutUs/teamElbasan/istep_fabjan.jpg";
//import ImageMigena from "@/assets/aboutUs/teamElbasan/istep_migena.jpg";
import ImagePeki from "@/assets/aboutUs/teamElbasan/istep_peki.jpg";

const imageTeamSwiss = [
  ImageAdrian,
  ImageAline,
  ImageDominic,
  ImageSven,
  ImageMatt,
  ImageMichelle,
  ImageOlivia,
  ImageMaxim,
  //ImageAlexandra,
  ImageYannic,
  ImageDeborah,
  ImageMarc,
  ImageNadine,
];
const imageTeamLezha = [ImageIzabela];
const imageTeamElbasan = [ImageFabjan, ImagePeki];

import { setRequestLocale } from "next-intl/server";

export default async function teamsOverview({ lng }: any) {
  setRequestLocale(lng);

  const translation = (await import(`../../../../locales/${lng}/${lng}.json`))
    .default;

  return (
    <>
      <div className="mt-12">
        <Team
          team={translation.TeamMember.swiss}
          image={imageTeamSwiss}
          themeText="rgb(25 40 71)"
          theme="darkblue"
          color="rgb(25 40 71 / 0)"
          intro={translation.OurTeam.swissTeam}
        />
      </div>

      <div className="mt-16">
        <Team
          team={translation.TeamMember.albaniaLezha}
          image={imageTeamLezha}
          themeText="rgb(37 146 111)"
          theme="green"
          color="rgb(37 146 111 / 0)"
          intro={translation.OurTeam.lezhaTeam}
        />
      </div>
      <div className="mt-16">
        <Team
          team={translation.TeamMember.albaniaElbasan}
          image={imageTeamElbasan}
          themeText="rgb(248 179 68)"
          theme="yellow"
          color="rgb(248 179 68 / 0)"
          intro={translation.OurTeam.elbasanTeam}
        />
      </div>
    </>
  );
}
