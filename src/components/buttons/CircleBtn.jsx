/* eslint-disable react/prop-types */

const CircleBtn = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick ? onClick : " "} className={style ? style : ""}>
      {label ? label : ""}
    </button>
  );
};

export default CircleBtn;
