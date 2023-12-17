import { useState } from "react";
import MultiSelectDropdown from "../components/common/MultiSelectDropdown";

const addProjectStyles = {
  headingText:
    "text-[18px] xs:text-[25px] md:text-[40px] lg:text-[60px] font-bold",
  clipText:
    "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500",
  labelText: "text-[18px] xs:text-[25px] md:text-[40px]",
  inputStyle:
    "w-full py-5 px-7 border placeholder:text-[18px] focus:outline-none bg-slate-50",
  fileInput: `file:mr-4 file:py-0 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
      file:bg-violet-50 file:text-primary 
      file:bg-slate-50`,
};

const DashboardAddProject = () => {
  const [coreTechs, setCoreTechs] = useState([]);

  const options = [
    { label: "Select", value: "Select" },
    { label: "ReactJS", value: "ReactJS" },
    { label: "NextJS", value: "NextJS" },
    { label: "MongoDB", value: "MongoDB" },
    { label: "ExpressJS", value: "ExpressJS" },
    { label: "TailwindCSS", value: "TailwindCSS" },
  ];

  const handleOnChange = (event) => {
    const techs = [...coreTechs, event.target.value];
    setCoreTechs(techs);
  };

  return (
    <>
      <h1 className={`${addProjectStyles.headingText} mt-14`}>
        Upload Project
      </h1>
      <form action="" className="mt-20 mb-[50vh]">
        <div className="mb-5">
          <label className={addProjectStyles.labelText} htmlFor="projectName">
            Project Name
          </label>
          <input
            className={addProjectStyles.inputStyle}
            type="text"
            placeholder="Add Project Name"
            id="projectName"
          />
        </div>

        <div className="mb-5">
          <label
            className={addProjectStyles.labelText}
            htmlFor="projectThumbnail"
          >
            Project Thumbnail
          </label>
          <input
            className={` ${addProjectStyles.inputStyle} ${addProjectStyles.fileInput}`}
            type="file"
            placeholder="Select Project Thumbnail"
            id="projectThumbnail"
          />
        </div>

        <div className="mb-5">
          <label className={addProjectStyles.labelText} htmlFor="liveUrl">
            Project Live Url
          </label>
          <input
            className={`${addProjectStyles.inputStyle}`}
            type="text"
            placeholder="Add project live url"
            id="liveUrl"
          />
        </div>

        <div className="mb-5">
          <label className={addProjectStyles.labelText} htmlFor="projectYear">
            Project Year
          </label>
          <input
            className={`${addProjectStyles.inputStyle}`}
            type="number"
            placeholder="Project Year"
            id="projectYear"
          />
        </div>

        <div className="mb-5">
          <h1 className={`${addProjectStyles.headingText} mt-14`}>
            Source Code
          </h1>
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <label className={addProjectStyles.labelText} htmlFor="clientUrl">
                Client Github URL
              </label>
              <input
                className={`${addProjectStyles.inputStyle}`}
                type="text"
                placeholder="Client Github URL"
                id="clientUrl"
              />
            </div>
            <div>
              <label className={addProjectStyles.labelText} htmlFor="serverUrl">
                Server Github URL
              </label>
              <input
                className={`${addProjectStyles.inputStyle}`}
                type="text"
                placeholder="Client Server URL"
                id="serverUrl"
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h1 className={`${addProjectStyles.headingText} mt-14`}>
            Write features with Thumbnail
          </h1>

          <div className="mt-5 mb-3 w-28 h-7 rounded-full flex items-center justify-center border">
            <span>Feature_1</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <label className={addProjectStyles.labelText} htmlFor="f1">
                Heading
              </label>
              <input
                className={`${addProjectStyles.inputStyle}`}
                type="text"
                placeholder="Feature heading"
                id="f1"
              />
            </div>
            <div>
              <label className={addProjectStyles.labelText} htmlFor="f2">
                Details
              </label>
              <input
                className={`${addProjectStyles.inputStyle}`}
                type="text"
                placeholder="Feature Details"
                id="f2"
              />
            </div>

            <div>
              <label className={addProjectStyles.labelText} htmlFor="f3">
                Feature Thumbnail
              </label>
              <input
                className={`${addProjectStyles.inputStyle} ${addProjectStyles.fileInput}`}
                type="file"
                placeholder="Feature Thumbnail"
                id="f3"
              />
            </div>
          </div>

          <hr className="my-10" />

          <div className="mt-5">
            <div className="mt-5 mb-3 w-28 h-7 rounded-full flex items-center justify-center border">
              <span>Feature_2</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <label className={addProjectStyles.labelText} htmlFor="f1">
                  Heading
                </label>
                <input
                  className={`${addProjectStyles.inputStyle}`}
                  type="text"
                  placeholder="Feature heading"
                  id="f1"
                />
              </div>
              <div>
                <label className={addProjectStyles.labelText} htmlFor="f2">
                  Details
                </label>
                <input
                  className={`${addProjectStyles.inputStyle}`}
                  type="text"
                  placeholder="Feature Details"
                  id="f2"
                />
              </div>

              <div>
                <label className={addProjectStyles.labelText} htmlFor="f3">
                  Feature Thumbnail
                </label>
                <input
                  className={`${addProjectStyles.inputStyle} ${addProjectStyles.fileInput}`}
                  type="file"
                  placeholder="Feature Thumbnail"
                  id="f3"
                />
              </div>
            </div>
          </div>

          <hr className="my-10" />

          <div className="mt-5">
            <div className="mt-5 mb-3 w-28 h-7 rounded-full flex items-center justify-center border">
              <span>Feature_3</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <label className={addProjectStyles.labelText} htmlFor="f1">
                  Heading
                </label>
                <input
                  className={`${addProjectStyles.inputStyle}`}
                  type="text"
                  placeholder="Feature heading"
                  id="f1"
                />
              </div>
              <div>
                <label className={addProjectStyles.labelText} htmlFor="f2">
                  Details
                </label>
                <input
                  className={`${addProjectStyles.inputStyle}`}
                  type="text"
                  placeholder="Feature Details"
                  id="f2"
                />
              </div>

              <div>
                <label className={addProjectStyles.labelText} htmlFor="f3">
                  Feature Thumbnail
                </label>
                <input
                  className={`${addProjectStyles.inputStyle} ${addProjectStyles.fileInput}`}
                  type="file"
                  placeholder="Feature Thumbnail"
                  id="f3"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className={`${addProjectStyles.headingText} mt-14`}>
            Technologies
          </h1>
          <div className="mt-5 flex items-center flex-row md:flex-cols gap-10">
            <div className="w-full">
              <label htmlFor="" className={addProjectStyles.labelText}>
                Core
              </label>
              <div className={`flex flex-wrap items-center gap-4`}>
                {coreTechs?.map((tech, index) => (
                  <p
                    className="w-20 h-7 text-[14px] flex items-center justify-center rounded-full bg-slate-100 mb-3"
                    key={index}
                  >
                    {tech}{" "}
                  </p>
                ))}
              </div>
              <MultiSelectDropdown
                styles={addProjectStyles.inputStyle}
                options={options}
                handleOnChange={handleOnChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className={addProjectStyles.labelText}>
                All Used
              </label>
              <MultiSelectDropdown styles={addProjectStyles.inputStyle} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DashboardAddProject;
