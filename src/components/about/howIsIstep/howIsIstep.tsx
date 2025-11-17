import Image from "next/image";

export default async function howIsIstep({ whoAreWe }: any) {
  return (
    <>
      <div className={`flex flex-col md:flex-row `}>
        <div className="font-palanquin w-full md:w-1/2">
          <h3 className={`text-h-md md:text-h-lg text-orange mb-2 md:mb-4`}>
            {whoAreWe.title}
          </h3>
          <p
            className={`text-p-lg md:text-h-md text-orange w-full md:w-4/5 mb-2 md:mb-4`}
          >
            {whoAreWe.subTitle}
          </p>
          <p className="w-full mb-2 text-darkblue text-p-sm md:text-p-lg">
            {whoAreWe.text}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={whoAreWe.image.asset.url}
            alt="Picture of the author"
            width={400}
            height={400}
            className="p-4 object-contain"
          />
        </div>
      </div>
    </>
  );
}
