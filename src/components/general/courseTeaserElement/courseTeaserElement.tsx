import Image, { StaticImageData as NextImageProps } from "next/image";
import Link from "next/link";

interface CoursesTeaserElementProps {
  title: string;
  text: string;
  image: any;

  lng: string;
  link: string;
  linkActive: boolean;
  index: number;
}

export default function CoursesTeaserElement({
  image,

  title,
  index,
  lng,
  link,
  linkActive,
}: CoursesTeaserElementProps) {
  const getColor = (idx: number) => {
    const color = ["bg-green ", "bg-yellow ", "bg-orange"];
    return color[idx % color.length];
  };

  return (
    <>
      {linkActive ? (
        <Link href={`${lng + link}`} className="rounded-3xl w-full">
          <div
            className={`rounded-3xl md:p-8 p-6 font-palanquin ${getColor(
              index
            )}`}
          >
            <div className={`flex`}>
              <Image
                src={image}
                alt={title}
                width={100}
                height={100}
                className="object-contain md:w-96 sm:w-48 w-28 aspect-square rounded-3xl max-h-56"
              />
            </div>

            <h5 className="text-h-xs md:text-h-md text-bold text-darkblue md:mt-8 mt-4 mb-2">
              {title}
            </h5>
          </div>
        </Link>
      ) : (
        <div
          className={`rounded-3xl md:p-8 p-6 font-palanquin ${getColor(index)}`}
        >
          <div className={`flex`}>
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="object-contain md:w-96 sm:w-48 w-28 aspect-square rounded-3xl max-h-56"
            />
          </div>

          <h5 className="text-h-xs md:text-h-md text-bold text-darkblue md:mt-8 mt-4 mb-2">
            {title}
          </h5>
        </div>
      )}
    </>
  );
}
