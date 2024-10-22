/* eslint-disable react/prop-types */
import { useState } from "react";

const MultiSelector = ({ options, selectedOptions, setSelectedOptions }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      // Remove the option if it's already selected
      setSelectedOptions(
        selectedOptions.filter((selected) => selected !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const isSelected = (option) => selectedOptions.includes(option);

  return (
    <section className="relative w-full">
      <section
        className="border px-4 py-2 rounded-2xl cursor-pointer w-full bg-white"
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0 ? (
          <div className="flex items-center flex-wrap gap-2  h-16">
            {selectedOptions.map((option, index) => (
              <span
                key={index}
                className="px-4 h-10 flex justify-center items-center border font-bold rounded-full text-sm bg-slate-100"
              >
                {option.name}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(option);
                  }}
                  className="ml-2 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x ml-3 w-5 h-5 bg-red-500 rounded-full p-1 text-xs"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        ) : (
          <span className="text-xl">Select skills...</span>
        )}
      </section>

      {isDropdownOpen && (
        <ul className="absolute border rounded-2xl w-full bg-white max-h-48 overflow-auto p-4">
          {options?.map((option) => (
            <li
              key={option?._id}
              onClick={() => handleSelect(option)}
              className={`px-4 mt-2 py-4 rounded-2xl border cursor-pointer ${
                isSelected(option) ? "bg-slate-300" : "bg-slate-100"
              }`}
            >
              {option.icon} {option.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MultiSelector;
