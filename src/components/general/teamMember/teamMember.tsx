"use client";
import Image, { StaticImageData as NextImageProps } from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface teamMemberProps {
  name: string;
  text: string;
  moreText: string;
  image: NextImageProps;
  theme: string;
  color: string;
}

export default function TeamMember({
  name,
  text,
  moreText,
  image,
  theme,
  color,
}: teamMemberProps) {
  const [open, setOpen] = useState(false);
  let hex;
  if (theme === "darkblue") hex = "#192847";
  if (theme === "green") hex = "#25926F";
  if (theme === "yellow") hex = "#F8B344";

  const backgroundColor = {
    "--tw-gradient-from": hex + " var(--tw-gradient-from-position)",
    "--tw-gradient-to": color + " var(--tw-gradient-to-position)",
    "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)",
  };
  const bgColor2 = "backgroundColor:" + hex;

  return (
    <>
      <div
        className="relative aspect-[8/9] cursor-pointer  rounded-3xl"
        onClick={() => setOpen(true)}
      >
        {/* <Image
          src={image}
          alt="Picture of the author"
          className="object-cover h-full rounded-3xl"
        /> */}
        <div
          className={`bg-gradient-to-t  h-36 absolute bottom-0 w-full rounded-b-3xl`}
          //@ts-ignore
          style={backgroundColor}
        >
          <div className="font-palanquin mt-8 ml-6 text-white ">
            <p className=" text-h-sm md:text-h-md  md:font-normal">{name}</p>
            <p>{moreText}</p>
          </div>
        </div>
      </div>
      <div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-90" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className={`fixed inset-0 transition-opacity  `}
                style={{ backgroundColor: hex }}
              />
            </Transition.Child>
            <div className={`fixed inset-0 z-10 w-screen overflow-y-auto `}>
              <div className="flex min-h-full  md:items-center justify-center md:p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel
                    className="relative transform md:overflow-hidden overflow-scroll md:rounded-3xl bg-white text-left md:h-[90vh]  
                 h-[100vh] transition-all md:w-5/6 "
                  >
                    <div className="flex md:flex-row flex-col w-full items-stretch justify-between h-full ">
                      <div className="w-full md:w-1/2 flex-1">
                        <div className="p-6 font-palanquin md:mt-6">
                          <h3 className="text-p-lg md:text-h-md font-bold ">
                            {name}
                          </h3>
                          <p className="text-p-lg">{text}</p>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2  md:aspect-auto max-h-full flex-1 md:relative static">
                        <Image
                          src={image}
                          alt={name}
                          className="object-cover rounded-rt-3xl rounded-rb-3xl h-full hidden md:flex"
                        />
                        <div
                          style={{ backgroundColor: hex }}
                          className=" w-10 h-10 rounded-full absolute right-4 top-4 flex justify-center items-center cursor-pointer"
                          onClick={() => setOpen(false)}
                        >
                          <XMarkIcon className={`w-8 fill-white`} />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}
