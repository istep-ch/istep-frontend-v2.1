import { PortableText } from "@portabletext/react";

export default function DigitalSkillsElement({ title, text, idx }: any) {
  const textColorOptions = ["#24926F", "#F8B343", "#E07200"];

  const textColorStyle = {
    color: textColorOptions[idx % textColorOptions.length],
  };

  return (
    <>
      <div className="font-palanquin text-darkblue ">
        <h3 className="text-h-sm md:text-h-md ">{title}</h3>
        <PortableText
          value={text}
          components={{
            list: ({ children, value }) => {
              if (value.listItem === "bullet") {
                return <ul className="list-disc pl-5">{children}</ul>;
              }
              if (value.listItem === "number") {
                return <ol className="list-decimal pl-5">{children}</ol>;
              }
              return <ul className="pl-5">{children}</ul>;
            },
            listItem: ({ children }) => <li className="mb-1">{children}</li>,
          }}
        />
      </div>
    </>
  );
}
