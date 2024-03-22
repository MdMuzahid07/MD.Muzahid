import { addProjectStyles } from "../../../styles";

const AboutMeText = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full">
      <h1 className="text-xl md:text-4xl">About Me Text</h1>
      <textarea
        className={`${addProjectStyles.inputStyle} mt-5`}
        name=""
        id=""
        rows={5}
        placeholder="I help brands shine in digital age. Together, we redefine the norm. No fluff, only the best. I use modern technologies like MERN-Stack and NextJS for full-stack web development. I also have good knowledge of mobile app development using React Native."
      ></textarea>
      <button className="px-4 py-2 bg-slate-100 mt-5 text-2xl border">
        Save
      </button>
    </form>
  );
};

export default AboutMeText;
