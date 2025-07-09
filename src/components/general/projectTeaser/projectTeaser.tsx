"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { truncate } from "@/utils/truncate";

const getGradient = (idx: number) => {
  const gradient = [
    "from-green ",
    "from-yellow ",
    "from-green/60",
    "from-orange",
  ];
  return gradient[idx % gradient.length];
};
const getColor = (idx: number) => {
  const color = ["bg-green ", "bg-yellow ", "bg-green/60", "bg-orange"];
  return color[idx % color.length];
};

const ProjectTeaser = ({ project, idx }: { project: any; idx: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const teaserText = truncate(project.teaser, 200);
  const bgGradient = getGradient(idx);
  const bgColor = getColor(idx);

  return (
    <div className=" bg-white w-full rounded-3xl h-full relative mb-16">
      <div className="relative">
        <Image
          src={project.image}
          width={500}
          height={500}
          alt={project.title}
          className="rounded-t-3xl max-h-96 h-full w-full object-cover"
        />
        <div
          className={`bg-gradient-to-t ${bgGradient} max-h-36 absolute bottom-0 w-full`}
        >
          <h4 className="text-white text-h-sm md:text-h-sm lg:text-h-md font-palanquin mt-10 md:mt-4 ml-10 md:font-normal pb-2">
            {project.title}
          </h4>
        </div>
      </div>
      <div className="p-5 font-palanquin">
        <div className="flex-1 flex ">
          <div
            className={`inline-block w-3 self-stretch ${bgColor} opacity-100 dark:opacity-50`}
          />
          <p className="ml-4 text-p-lg">{teaserText}</p>
        </div>

        <button
          type="button"
          onClick={() =>
            router.push(
              pathname.substring(0, 3) +
                "/projects" +
                project.link.toLowerCase()
            )
          }
          className={`rounded-full ${bgColor} absolute bottom-4 mt-4 ml-5 px-10 py-2.5 text-sm font-semibold text-white focus-visible:outline hover:scale-105 transition-all duration-300`}
        >
          {project.moreText}
        </button>
      </div>
    </div>
  );
};

export default ProjectTeaser;
