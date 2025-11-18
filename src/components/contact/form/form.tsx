"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";

export default function from({ contactData }: any) {
  const [emailSuccess, setEmailSuccess] = useState<boolean | null>(false);
  const [emailFailed, setEmailFailed] = useState<boolean | null>(false);

  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    radio: "",
    message: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    const serviceID = "service_jq3nxlz";
    const templateID = "template_omcf3a3";
    const userID = "9Fwh4_-6GU9R1g5_r";

    try {
      const emailParams = {
        user_name: userInput.firstName,
        user_name2: userInput.lastName,
        user_email: userInput.email,
        message: userInput.message,
      };
      const res = await emailjs.send(
        serviceID,
        templateID,
        emailParams,
        userID
      );

      if (res.status === 200) {
        setEmailSuccess(true);
        console.log("Email sent successfully!");
      }
    } catch (error) {
      setEmailFailed(true);
      console.log("Email sent faild!");
    }
  }

  return (
    <div className="container mx-auto md:py-24 py-12 px-8 lg:px-4">
      <div>
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <form
          className="mx-auto md:mt-16 max-w-xl sm:mt-20 font-palanquin text-darkblue"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {contactData.firstName}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  value={userInput.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {contactData.lastName}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastName"
                  value={userInput.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {contactData.email}
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userInput.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {contactData.message}
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  value={userInput.message}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <p className="block text-sm font-semibold leading-6 text-gray-900">
                {contactData.inquiryType}
              </p>
              <div className="mt-6 space-y-6">
                {contactData.inquiryOptions.map(
                  (option: string, index: number) => (
                    <div className="flex items-center gap-x-3" key={index}>
                      <input
                        id={`option-${index}`}
                        name="radioInput"
                        type="radio"
                        value={option}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor={`option-${index}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {option}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-darkblue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-darkblue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {contactData.buttonText}
            </button>
          </div>
          {emailSuccess && (
            <p className="text-center mt-4 text-green">Email Send</p>
          )}
          {emailFailed && (
            <p className="text-center mt-4 text-green">
              Email Failed Try Again
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
