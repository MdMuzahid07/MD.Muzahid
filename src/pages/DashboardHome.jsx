const homeStyles = {
  headingText:
    "text-[18px] xs:text-[25px] md:text-[40px] lg:text-[60px] font-bold",
  clipText:
    "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500",
  labelText: "text-[18px] xs:text-[25px] md:text-[40px]",
  inputStyle:
    "w-full py-5 px-7 border placeholder:text-[18px] focus:outline-none bg-slate-50",
  fileInput: `file:mr-4 file:py-0 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
      file:bg-violet-50 file:text-primary 
      file:bg-slate-50`,
};

const DashboardHome = () => {
  return (
    <div className="bg-white">
      <h1 className={`${homeStyles.headingText} mt-14`}>
        Welcome To Dashboard
      </h1>
    </div>
  );
};

export default DashboardHome;
