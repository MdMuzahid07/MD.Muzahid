/* eslint-disable react/prop-types */
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const DropDown = ({ links, styles }) => {
  return (
    <>
      <Menu as="div">
        <div>
          <Menu.Button className="w-10 h-10 border active:border-primary flex justify-center items-center">
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
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`${styles} absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 bg-white shadow-lg  focus:outline-none z-20 min-h-32`}
          >
            {links?.map(({ name, icon, link, id }) => (
              <div
                key={id}
                className="px-3 py-2 cursor-pointer hover:bg-slate-100"
              >
                <Menu.Item>
                  {() => (
                    <Link to={link} className="flex items-center gap-3 ">
                      {icon} <span className="text-xs">{name}</span>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default DropDown;
