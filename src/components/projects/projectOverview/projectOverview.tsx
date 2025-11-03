import ProjectTeaser from "@/components/projects/projectTeaser/projectTeaser";

interface projectProps {
  projects: any;
  moreText: string;
}

export default async function projectOverview({
  projects,
  moreText,
}: projectProps) {
  return (
    <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
      {projects.map((project: any, index: number) => (
        <div key={index} className="mb-12">
          <ProjectTeaser project={project} idx={index} moreText={moreText} />
        </div>
      ))}
    </div>
  );
}
