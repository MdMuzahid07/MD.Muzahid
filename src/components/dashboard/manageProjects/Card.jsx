import DropDown from "../../ui/DropDown";
import Toggle from "../../ui/Toggle";

const Card = () => {
  return (
    <div className="w-full h-44 p-4 bg-white border relative">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl">Project Name</h1>
        <DropDown />
      </header>
      <section>
        <p className="text-xs mb-3">Posted: 09-03-2024</p>
        <label htmlFor="" className="flex items-center gap-2">
          <span className="text-xs">Active</span>
          <Toggle />
        </label>
      </section>

      <p className="w-24 h-8 border flex justify-center items-center tracking-wider font-bold text-xl my-2 absolute -bottom-2 left-0">
        MERN
      </p>
    </div>
  );
};

export default Card;
