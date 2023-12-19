import { socialLinks } from "../../constants";
import MagneticEffect from "../../utils/MagneticEffect";
import MyLocalTime from "../../utils/MyLocalTime";

const styles = {
  liHeader: "text-[25px] md:text-[32px] font-bold opacity-70 mb-5",
  li: "text-[18px] 2xl:text-[25px] mb-5 font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transition ease-in-out delay-100",
};

const Aside = () => {
  return (
    <aside className=" col-span-12 md:col-span-4 lg:col-span-3 text-white w-full relative">
      <span className=" absolute -mt-24">
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
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      </span>
      <ul className="w-full ">
        <li className={styles.liHeader}>Lets Connect</li>
        <li>
          <MagneticEffect>
            <a className={styles.li} href="mailto:mdmuzahid.dev@gmail.com">
              mdmuzahid.dev@gmail.com
            </a>
          </MagneticEffect>
        </li>
      </ul>
      <ul className="w-full mt-[50px] md:mt-[70px]">
        <li className={styles.liHeader}>Social</li>
        {socialLinks?.map(({ label, href, _id }) => (
          <li key={_id} className={styles.li}>
            <a href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          </li>
        ))}
        <li className="mt-[50px] opacity-70">My Local Time </li>
        <li>
          <h1 className={styles.li}>{MyLocalTime()}</h1>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
