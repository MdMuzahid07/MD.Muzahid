import { reactJS } from "../../assets";

const Spinner = () => {
  return (
    <div className="h-[50vh] w-full flex justify-center items-center">
      <img className="w-10 h-10 animate-spin" src={reactJS} alt="" />
    </div>
  );
};

export default Spinner;
