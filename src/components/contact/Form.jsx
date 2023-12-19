import { useState } from "react";
import { HR } from "../common/HR";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Form = () => {
  const form = useRef();
  const [isSended, setIsSended] = useState(false);

  // sending contact form info using EmailJS
  const handleContactForm = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_np4mdp8",
        "template_g1sji6n",
        form.current,
        "jW_KrpoHnAgWmA1cl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    event.target.reset();

    setIsSended(true);
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={handleContactForm}
        className="col-span-12 md:col-span-8 lg:col-span-9 w-full text-white"
      >
        <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] mb-7" />
        <div className="relative">
          <div className="flex gap-8 md:gap-10 w-full">
            <h1 className="text-[18px] md:text-[25px] opacity-50">01.</h1>
            <div>
              <label
                className="w-full text-[20px] md:text-[25px] lg:text-[32px] opacity-70"
                htmlFor="name"
              >
                Your Name?
              </label>
              <input
                className="w-full focus:outline-none bg-primary placeholder:text-slate-700 font-bold text-[18px] md:text-[25px] h-16 "
                type="text"
                name="name"
                placeholder="Elon@mask"
                id="name"
                required
              />
            </div>
          </div>

          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] my-7" />

          <div className="flex gap-8 md:gap-10 w-full">
            <h1 className="text-[18px] md:text-[25px] opacity-50">02.</h1>
            <div>
              <label
                className="w-full text-[20px] md:text-[25px] lg:text-[32px] opacity-70"
                htmlFor="email"
              >
                Your Email Address?
              </label>
              <input
                className="w-full focus:outline-none bg-primary placeholder:text-slate-700 font-bold text-[18px] md:text-[25px] h-16 "
                type="email"
                name="email"
                placeholder="Elon@mask@gmail.com"
                id="email"
                required
              />
            </div>
          </div>

          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] my-7" />

          <div className="flex gap-8 md:gap-10 w-full">
            <h1 className="text-[18px] md:text-[25px] opacity-50">03.</h1>
            <div>
              <label
                className="w-full text-[20px] md:text-[25px] lg:text-[32px] opacity-70"
                htmlFor="organization"
              >
                Do you have any Organization?, if yes what is the name?
              </label>
              <input
                className="w-full focus:outline-none bg-primary placeholder:text-slate-700 font-bold text-[18px] md:text-[25px] h-16 "
                type="text"
                name="organization"
                placeholder="SpaceX City Mars"
                id="organization"
                required
              />
            </div>
          </div>

          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] my-7" />

          <div className="flex gap-8 md:gap-10 w-full">
            <h1 className="text-[18px] md:text-[25px] opacity-50">04.</h1>
            <div>
              <label
                className="w-full text-[20px] md:text-[25px] lg:text-[32px] opacity-70"
                htmlFor="services"
              >
                Which services you need?
              </label>
              <input
                className="w-full focus:outline-none bg-primary placeholder:text-slate-700 font-bold text-[18px] md:text-[25px] h-16 "
                type="text"
                name="service"
                placeholder="Web Development, Backend Development, MERN-Stack"
                id="services"
                required
              />
            </div>
          </div>

          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] my-7" />

          <div className="flex gap-8 md:gap-10 w-full">
            <h1 className="text-[18px] md:text-[25px] opacity-50">05.</h1>
            <div>
              <label
                className="w-full text-[20px] md:text-[25px] lg:text-[32px] opacity-70"
                htmlFor="message"
              >
                Write about your idea
              </label>
              <textarea
                rows={5}
                cols={20}
                name="message"
                className="w-full focus:outline-none bg-primary placeholder:text-slate-700 font-bold text-[18px] md:text-[25px] "
                type="text"
                placeholder="Hello Muzahid, I need a Business Website..."
                id="message"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className=" transition ease-in-out delay-50 text-white h-28 w-28 border justify-center items-center rounded-full  absolute -bottom-14 right-10 sm:right-16 md:right-32 bg-primary hover:bg-black"
          >
            {isSended ? "Success" : "SEND"}
          </button>
          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] mt-20" />
        </div>
      </form>
    </>
  );
};

export default Form;
