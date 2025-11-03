import Image from "next/image";

export default function wahtWeDo({ whatWeDo }: { whatWeDo: any }) {
  return (
    <>
      <div className="text-orange font-palanquin ">
        <h3 className="text-h-md md:text-h-lg "> {whatWeDo.title}</h3>
        <p className="text-p-lg md:text-h-md w-9/12">{whatWeDo.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-palanquin mt-4 md:mt-4">
        <p className="text-p-sm md:text-p-lg text-darkblue"> {whatWeDo.text}</p>
        <Image
          src={whatWeDo.image.asset.url}
          alt="Picture of the author"
          height={400}
          width={400}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-palanquin mt-4 md:mt-4">
        <Image
          src={whatWeDo.image2.asset.url}
          alt="Picture of the author"
          height={400}
          width={400}
        />
        <p className="text-p-sm md:text-p-lg order-first md:order-last text-darkblue">
          {whatWeDo.text2}
        </p>
      </div>
    </>
  );
}
