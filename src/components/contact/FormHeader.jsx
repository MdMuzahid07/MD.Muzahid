const FormHeader = () => {
  return (
    <div className="flex justify-end md:justify-start gap-4  md:gap-28 lg:56 items-center flex-row-reverse md:flex-row relative">
      {/* arrow svg start  */}
      <span className="text-white absolute right-0 -mt-24 block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
          />
        </svg>
      </span>
      {/* arrow svg end */}
      <h1 className="capitalize text-[30px] xs:text-[40px] md:text-[50px] xl:text-[90px]  text-white inline font-bold">
        {`Let's`} Work{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Together
        </span>{" "}
      </h1>
      <figure className=" w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px]">
        <img
          className="w-full h-full object-cover object-center rounded-full"
          src="https://img.freepik.com/free-photo/green-sprouts-dark-soil-against-blurred-background-symbolizing-concept-growth-potential_90220-1462.jpg?t=st=1702125875~exp=1702129475~hmac=d61ddb3cab8894c005238de188f387d4a304fcfc36759c903024b71ab3bbfc9d&w=900"
          alt=""
        />
      </figure>{" "}
    </div>
  );
};

export default FormHeader;
