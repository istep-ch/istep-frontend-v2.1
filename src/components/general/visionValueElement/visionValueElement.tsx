import Image, { StaticImageData as NextImageProps } from "next/image";

interface VisionValueElementProps {
  theme: string;
  title: string;
  text: string;
  image: any;
}

export default function VisionValueElement({
  theme,
  image,
  title,
  text,
}: VisionValueElementProps) {
  return (
    <div>
      <div
        className={`bg-${theme}  rounded-3xl md:p-8 p-4 font-palanquin md:min-h-80 lg:min-h-80 h-auto`}
      >
        <div className={`flex flex-1 justify-center `}>
          <Image
            src={image.asset.url}
            alt="Picture of the author"
            className="object-contain md:w-2/5 w-3/5 aspect-square rounded-3xl max-h-56"
            width={500}
            height={500}
          />
        </div>

        <h5 className="text-h-xs md:text-h-md text-bold text-white md:mt-8 mt-4 mb-2 ml-8 md:ml-2 md:mb-4">
          {title}
        </h5>
      </div>

      <div className="font-palanquin mt-8">
        <div className="flex-1 flex">
          <div
            className={`inline-block w-3 self-stretch bg-${theme} opacity-100 dark:opacity-50 `}
          />
          <p className="ml-4 text-darkblue md:text-p-lg text-p-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}
