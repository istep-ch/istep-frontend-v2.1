import VisionValueElement from "../visionValueElement/visionValueElement";

export default function ourVision({ ourVision }: any) {
  return (
    <div className="bg-yellow/20">
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <div className="font-palanquin  text-orange">
          <h3 className="text-h-md md:text-h-lg  mb-2 md:mb-4">
            {ourVision.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ourVision.visionValuesItems.map((value: any, idx: number) => (
            <div className="mt-4" key={idx}>
              <VisionValueElement
                title={value.title}
                image={value.image}
                theme={"yellow"}
                text={value.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
