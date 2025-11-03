import Image, { StaticImageData as NextImageProps } from "next/image";
import Link from "next/link";

interface CoursesTeaserElementProps {
  bgColor: string;
  title: string;
  text: string;
  image: NextImageProps;
  imagePosition: string;
  lng: string;
  link: string;
  linkActive: boolean;
}

export default function CoursesTeaserElement({
  bgColor,
  image,
  imagePosition,
  title,
  text,
  lng,
  link,
  linkActive,
}: CoursesTeaserElementProps) {
  const backgroundColor = bgColor;
  return (
    <>
      {linkActive ? (
        <Link
          href={`${lng + link}`}
          style={{ backgroundColor }}
          className="rounded-3xl w-full"
        >
          <div
            className={`rounded-3xl md:p-8 p-6 font-palanquin`}
            style={{ backgroundColor }}
          >
            <div className={`${imagePosition} flex`}>
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
          className={`rounded-3xl md:p-8 p-6 font-palanquin`}
          style={{ backgroundColor }}
        >
          <div className={`${imagePosition} flex`}>
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
