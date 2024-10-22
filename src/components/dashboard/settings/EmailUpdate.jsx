import { addProjectStyles } from "../../../styles";

const EmailUpdate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="py-10 w-full">
      <h1 className="text-xl md:text-4xl">Email Update</h1>
      <input
        className={`${addProjectStyles.inputStyle} mt-5 rounded-2xl`}
        name=""
        id=""
        placeholder="mdmuzahid.dev@gmail.com"
      ></input>
      <button className="px-7 rounded-full py-2 bg-slate-100 mt-5 text-2xl border">
        Save
      </button>
    </form>
  );
};

export default EmailUpdate;
