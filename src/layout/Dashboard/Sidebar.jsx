/* eslint-disable react/prop-types */
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  {
    name: "Profile",
    path: "/dashboard/settings",
  },
  {
    name: "Dashboard",
    path: "/dashboard/home",
  },
  {
    name: "Project",
    subItems: [
      { name: "Add Project", path: "/dashboard/addProject" },
      { name: "Manage Projects", path: "/dashboard/manageProjects" },
    ],
  },
  {
    name: "Blog",
    subItems: [
      { name: "Add Blog", path: "/dashboard/addBlog" },
      { name: "Manage Blogs", path: "/dashboard/manageBlog" },
    ],
  },
  {
    name: "Course & Certificates",
    subItems: [
      { name: "Add Course", path: "/dashboard/addCourse" },
      { name: "Manage Courses", path: "/dashboard/manageCourses" },
    ],
  },
  {
    name: "Experience",
    subItems: [
      { name: "Add Experience", path: "/dashboard/addExperience" },
      { name: "Manage Experiences", path: "/dashboard/manageExperiences" },
    ],
  },
  {
    name: "Educations",
    subItems: [
      { name: "Add Education", path: "/dashboard/addEducation" },
      { name: "Manage Education", path: "/dashboard/manageEducation" },
    ],
  },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <aside
      className={`${
        isSidebarOpen ? "flex" : "hidden"
      } col-span-12 lg:col-span-4 xl:col-span-2 text-xl bg-slate-200 text-black min-h-screen sm:max-h-screen h-full w-full sticky top-0 left-0 border-r z-50`}
    >
      <section className="relative p-8 w-full">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
          Md. Muzahid
        </h4>

        {/* // button for mobile and close */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="fixed right-10 top-10 border rounded-full w-10 h-10 flex justify-center items-center lg:hidden bg-black text-white"
        >
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <section className="overflow-y-auto max-h-[80vh]">
          <section className="mt-6 sm:mt-14 md:mt-16 border-t border-slate-300">
            {sidebarItems.map((item, index) => (
              <div key={index} className="mb-7">
                {!item.subItems ? (
                  <NavLink to={item.path}>
                    <button className="px-4 py-2 bg-black text-left rounded-xl text-white w-full">
                      {item.name}
                    </button>
                  </NavLink>
                ) : (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="py-2 px-4 text-left bg-primary text-white w-full rounded-xl flex items-center justify-between">
                          <span>{item.name}</span>
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
                            className={`lucide lucide-chevron-down ${
                              open ? "rotate-180 transform" : ""
                            }`}
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 mt-3 bg-black py-6 px-4 rounded-2xl">
                          {item.subItems.map((subItem, subIndex) => (
                            <NavLink key={subIndex} to={subItem.path}>
                              <button className="px-4 py-2 bg-white text-black text-left rounded-xl w-full mb-7">
                                {subItem.name}
                              </button>
                            </NavLink>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )}
              </div>
            ))}
          </section>
        </section>
      </section>
    </aside>
  );
};

export default Sidebar;
