import Carousel from "./carousel/carousel";

export default async function OurProjects({ ourProjects }: any) {
  return (
    <div className="bg-yellow/40 ">
      <div className="md:py-24 py-12">
        <div className=" mb-6 text-orange font-palanquin  container mx-auto px-8 lg:px-4">
          <h3 className="text-h-md md:text-h-lg ">{ourProjects.title}</h3>
          <p className="text-p-lg md:text-h-md w-9/12">
            {ourProjects.subtitle}
          </p>
        </div>
        <div className="md:mt-16 mt-8 container mx-auto px-0 ">
          <Carousel
            projects={ourProjects.projects}
            moreText={ourProjects.moreText}
          />
        </div>
      </div>
    </div>
  );
}
