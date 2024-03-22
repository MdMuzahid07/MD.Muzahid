import { facebook, github, linkedIn, reddit, twitter } from "../../../assets";

const SocialLinks = () => {
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
        {connectMe?.map(({ name, icon, link, active }, index) => (
          <div
            key={index}
            className="w-full xs:w-48 h-16 bg-white border p-3 flex gap-4"
          >
            <img src={icon} className="w-10 h-10" alt="" />
            <div className="w-full">
              <p className="text-xs">{name}</p>
              <div className="flex items-center text-[10px] mt-2 gap-2">
                <button className="px-1 bg-slate-100 ">Add link</button>
                <button
                  className={`${
                    active ? "bg-green-500" : "bg-red-500"
                  } px-1  text-white `}
                >
                  Active
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
