import VisionValueElement from "../visionValueElement/visionValueElement";

export default function ourValues({ ourValues }: any) {
  return (
    <div>
      <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
        <div className="font-palanquin  text-orange">
          <h3 className="text-h-md md:text-h-lg  mb-2 md:mb-4">
            {ourValues.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {ourValues.visionValuesItems.map((value: any, idx: number) => (
            <div className="mt-4" key={idx}>
              <VisionValueElement
                title={value.title}
                image={value.image}
                theme={"darkblue"}
                text={value.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
