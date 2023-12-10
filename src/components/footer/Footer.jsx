import { styles } from "../../styles";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.paddingX} bg-primary`}>
      <div className="max-w-7xl mx-auto text-white py-5">
        <p>Copyright &#169; {year} - All right reserved by Md.Muzahid</p>
      </div>
    </footer>
  );
};

export default Footer;
