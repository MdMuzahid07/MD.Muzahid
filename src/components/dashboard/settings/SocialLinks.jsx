import { useEffect, useState } from "react";
import { connectMe } from "../../../constants";
// import { linkedIn, github, facebook, reddit, twitter } from "../../../assets";
import toast from "react-hot-toast";
import { toastStyle } from "../../../styles";
import axios from "axios";

const SocialLinks = () => {
  const [socialLinkAdd, setSocialLinkAdd] = useState(false);
  const [addNewSocialPlatform, setAddNewSocialPlatform] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState({});
  const [fetchSocial, setFetchSocial] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/social-platforms")
      .then((res) => setFetchSocial(res?.data?.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    const link = e.target.socialLink.value;

    if (link.length < 7) {
      toast.error("Please enter the link first", {
        id: "link error, social platform",
        style: toastStyle,
      });
      return;
    }

    const saveData = {
      name: selectedPlatform?.name,
      icon: selectedPlatform?.icon,
      link: link,
      active: true,
    };

    axios
      .post("http://localhost:5000/api/v1/social-platforms", saveData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error, "from social platform post"));

    console.log(saveData);

    setSocialLinkAdd(false);
    setAddNewSocialPlatform(false);
  };

  const handleActive = async (id) => {
    const data = {
      active: true,
    };

    await axios
      .patch(`http://localhost:5000/api/v1/social-platforms/${id}`, data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/v1/social-platforms/${id}`)
      .then((res) => {
        if (res?.data?.success) {
          toast.error("Delete successfully", {
            id: "delete platform",
            style: toastStyle,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-10 w-full">
      <h1 className="text-xl md:text-4xl mb-5">Social links</h1>
      <div className="flex items-center gap-5 flex-wrap">
        {fetchSocial?.map(({ name, icon, active, _id }) => (
          <div
            key={_id}
            className="w-full xs:w-40 h-16 bg-slate-50 border p-3 flex gap-3"
          >
            <img src={icon} className="w-10 h-10" alt="" />
            <div className="w-full">
              <p className="text-xs">{name}</p>
              <button
                title={active ? "Click to inactive" : "Click to active"}
                onClick={() => handleActive(_id)}
                className={`${
                  active ? "bg-green-500" : "bg-red-500"
                } px-2  text-white text-xs`}
              >
                {active ? "active" : "inactive"}
              </button>
            </div>
            <button onClick={() => handleDelete(_id, active)} title="Delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-slate-400 hover:text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        ))}
        <div className="relative">
          {socialLinkAdd && (
            <div className="w-[300px] max-h-96 h-96 px-4 py-5 bg-white border absolute md:right-0 bottom-20 overflow-y-auto">
              {!addNewSocialPlatform &&
                connectMe?.map((platform, index) => {
                  return (
                    <div
                      onClick={() => {
                        setSelectedPlatform(platform);
                        setAddNewSocialPlatform(true);
                      }}
                      key={index}
                      className="border hover:border-red-500 mb-4 cursor-pointer"
                    >
                      <div className="w-full h-20 px-4 py-2 bg-slate-50 flex items-center  gap-5 relative">
                        <img
                          className="w-10 h-10"
                          src={platform?.icon}
                          alt=""
                        />
                        <p className="text-xl">{platform?.name}</p>
                        <span
                          title="Add Link"
                          className="absolute right-4 text-slate-400"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  );
                })}

              {addNewSocialPlatform && (
                <div className="relative">
                  <button
                    onClick={() => {
                      setAddNewSocialPlatform(false);
                    }}
                    className="absolute top-0"
                    title="back to list"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-slate-400 hover:text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                      />
                    </svg>
                  </button>

                  <div className="flex justify-center mt-5">
                    <img
                      className="w-14 h-14"
                      src={selectedPlatform?.icon}
                      alt=""
                    />
                  </div>
                  <p className="text-center mt-2 text-xl">
                    {selectedPlatform?.name}
                  </p>
                  <form onSubmit={handleSave} className="mt-10">
                    <input
                      className="border w-full bg-slate-50 px-3 py-1 rounded-full focus:outline-none focus:border-indigo-500"
                      type="text"
                      name="socialLink"
                      placeholder="Please enter the link "
                      id=""
                    />
                    <div className="flex gap-2 justify-center mt-7">
                      <button className="w-24 text-white bg-indigo-500 rounded-full">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

          <button
            title="Add New"
            onClick={() => setSocialLinkAdd(!socialLinkAdd)}
            className={`w-16 h-16 md:w-40 md:h-16 border ${
              socialLinkAdd
                ? "border-red-500 text-red-500"
                : "hover:border-red-500 hover:text-red-500 text-slate-400"
            }  flex justify-center items-center  bg-slate-50 rounded-full relative`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
