import { styles } from "../../styles";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <footer className={`${styles.paddingX} bg-primary relative`}>
      <div className="max-w-screen-2xl flex justify-end w-full absolute">
        <button onClick={handleTop} className="text-white">
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
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
        </button>
      </div>
      <div className="max-w-screen-2xl mx-auto text-white py-5 flex flex-col md:flex-row md:justify-between">
        <p>Copyright &#169; {year} - All right reserved by Md.Muzahid</p>
        <p className="text-slate-500 text-xs">v 1.0.0</p>
      </div>
    </footer>
  );
};

export default Footer;
