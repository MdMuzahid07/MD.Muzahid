import { reactJS } from "../../assets";

const Spinner = () => {
  return (
    <div className="h-screen w-full flex justify-center bg-primary items-center">
      <img
        className="w-10 h-10 animate-spin rounded-full"
        src={reactJS}
        alt=""
      />
    </div>
  );
};

export default Spinner;
