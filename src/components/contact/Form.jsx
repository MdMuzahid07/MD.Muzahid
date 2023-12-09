import { HR } from "../common/HR";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="col-span-12 md:col-span-8 lg:col-span-9 w-full text-white "
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
                placeholder="Elon@mask"
                id="name"
              />
            </div>
          </div>

          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] my-7" />

          <div className="flex gap-8 md:gap-10 w-full">
            <h1 className="text-[18px] md:text-[25px] opacity-50">01.</h1>
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
                placeholder="Elon@mask@gmail.com"
                id="email"
              />
            </div>
          </div>

          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] my-7" />

          <div className="flex gap-8 md:gap-10 w-full">
            <h1 className="text-[18px] md:text-[25px] opacity-50">01.</h1>
            <div>
              <label
                className="w-full text-[20px] md:text-[25px] lg:text-[32px] opacity-70"
                htmlFor="organization"
              >
                Do you have any Organization?, if had what is the name?
              </label>
              <input
                className="w-full focus:outline-none bg-primary placeholder:text-slate-700 font-bold text-[18px] md:text-[25px] h-16 "
                type="text"
                placeholder="SpaceX City Mars"
                id="organization"
              />
            </div>
          </div>

          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] my-7" />

          <div className="flex gap-8 md:gap-10 w-full">
            <h1 className="text-[18px] md:text-[25px] opacity-50">01.</h1>
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
                placeholder="Web Development, Backend Development, MERN-Stack"
                id="services"
              />
            </div>
          </div>

          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] my-7" />

          <div className="flex gap-8 md:gap-10 w-full">
            <h1 className="text-[18px] md:text-[25px] opacity-50">01.</h1>
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
                className="w-full focus:outline-none bg-primary placeholder:text-slate-700 font-bold text-[18px] md:text-[25px] "
                type="text"
                placeholder="Hello Muzahid, I need a Business Website..."
                id="message"
              />
            </div>
          </div>

          <button
            type="button"
            href="#about"
            className="hidden transition ease-in-out delay-50 text-white h-28 w-28 border xl:flex justify-center items-center rounded-full  absolute -bottom-14 right-10 sm:right-16 md:right-32 bg-primary hover:bg-black"
          >
            SEND
          </button>
          <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px] mt-20" />
        </div>
      </form>
    </>
  );
};

export default Form;
