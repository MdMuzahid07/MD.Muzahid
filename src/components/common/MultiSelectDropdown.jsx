/* eslint-disable react/prop-types */
const MultiSelectDropdown = ({ styles, options, handleOnChange, id }) => {
  return (
    <div className="relative w-full">
      <select
        id={id}
        onChange={(event) => handleOnChange(event)}
        className={`${styles} appearance-none`}
      >
        {options?.map((option, index) => (
          <option
            className="w-full py-5 bg-slate-100 text-[18px]"
            key={option + index}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <span className="absolute right-7 top-5">
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
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default MultiSelectDropdown;
