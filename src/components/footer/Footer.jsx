import { styles } from "../../styles";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.paddingX} bg-primary`}>
      <div className="max-w-screen-2xl mx-auto text-white py-5 flex justify-between">
        <p>Copyright &#169; {year} - All right reserved by Md.Muzahid</p>
        <p className="text-slate-500 text-xs">v 1.0.0</p>
      </div>
    </footer>
  );
};

export default Footer;
