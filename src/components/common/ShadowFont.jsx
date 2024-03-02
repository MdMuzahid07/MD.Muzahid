/* eslint-disable react/prop-types */
const ShadowFont = ({ children, styles }) => {
  return (
    <h1
      style={{ textShadow: "1px 1px 1px #E2E2E2" }}
      className={`bg-clip-text text-black text-[30px] xs:text-[50px] md:text-[60px] lg:text-[70px] font-extrabold ${styles}`}
    >
      {children}
    </h1>
  );
};

export default ShadowFont;
