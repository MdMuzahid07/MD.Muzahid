import { useState } from "react";
import { facebook, github, linkedIn, reddit, twitter } from "../../../assets";

const SocialLinks = () => {
  const [socialLinkAdd, setSocialLinkAdd] = useState(false);

  const connectMe = [
    { name: "LinkedIn", icon: linkedIn, link: "mdmuzahid.dev", active: true },
    { name: "Twitter", icon: twitter, link: "mdmuzahid.dev", active: true },
    { name: "Reddit", icon: reddit, link: "mdmuzahid.dev", active: true },
    { name: "Github", icon: github, link: "mdmuzahid.dev", active: true },
    { name: "Facebook", icon: facebook, link: "mdmuzahid.dev", active: false },
  ];

  return (
    <div className="mt-10 w-full">
      <h1 className="text-xl md:text-4xl mb-5">Social links</h1>
      <div className="flex items-center gap-5 flex-wrap">
        {connectMe?.map(({ name, icon, active }, index) => (
          <div
            key={index}
            className="w-full xs:w-40 h-16 bg-slate-50 border p-3 flex gap-3"
          >
            <img src={icon} className="w-10 h-10" alt="" />
            <div className="w-full">
              <p className="text-xs">{name}</p>
              <button
                className={`${
                  active ? "bg-green-500" : "bg-red-500"
                } px-1  text-white w-10 text-xs`}
              >
                Active
              </button>
            </div>
            <button>
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
            <div className="w-[300px] max-h-80 h-80 px-4 py-5 bg-white border absolute md:right-0 bottom-20 overflow-y-auto">
              {connectMe?.map(({ name, icon }, index) => {
                return (
                  <div
                    key={index}
                    className="mb-4 w-full h-20 border px-4 py-2 bg-slate-50 flex items-center  gap-5 relative"
                  >
                    <img className="w-10 h-10" src={icon} alt="" />
                    <p className="text-xl">{name}</p>
                    <button title="Add Link" className="absolute right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-slate-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          <button
            title="Add New"
            onClick={() => setSocialLinkAdd(!socialLinkAdd)}
            className="w-16 h-16 md:w-40 md:h-16 border hover:border-red-500 flex justify-center items-center text-slate-400 hover:text-red-500 bg-slate-50 rounded-full relative"
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
