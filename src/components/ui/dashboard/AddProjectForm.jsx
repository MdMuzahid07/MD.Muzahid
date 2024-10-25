/* eslint-disable react/prop-types */
import { options } from "../../../constants";
import { addProjectStyles } from "../../../styles";
import MultiSelectDropdown from "../../common/MultiSelectDropdown";

const AddProjectForm = ({
  handleForm,
  getEvent,
  handleOnChangeCoreTechs,
  handleOnChangeAllUsedTechs,
  allUsedTechs,
  coreTechs,
  f_1,
  f_2,
  f_3,
  currentData,
}) => {
  return (
    <form onSubmit={handleForm} className="mt-20 mb-[50vh] relative">
      <div className="mb-5">
        <label className={addProjectStyles.labelText} htmlFor="projectName">
          Project Name
        </label>
        <input
          className={addProjectStyles.inputStyle}
          type="text"
          name="projectName"
          placeholder={currentData ? currentData?.name : "Add Project Name"}
          id="projectName"
          required
        />
      </div>

      <div className="mb-5">
        <label
          className={addProjectStyles.labelText}
          htmlFor="projectThumbnail"
        >
          Project Thumbnail
          {currentData ? <img src={currentData?.thumbnailImg} /> : ""}
        </label>
        <input
          onChange={getEvent}
          className={` ${addProjectStyles.inputStyle} ${addProjectStyles.fileInput}`}
          type="file"
          placeholder="Select Project Thumbnail"
          id="projectThumbnail"
          name="projectThumbnail"
          required
        />
      </div>

      <div className="mb-5">
        <label className={addProjectStyles.labelText} htmlFor="liveUrl">
          Project Live Url
        </label>
        <input
          className={`${addProjectStyles.inputStyle}`}
          type="text"
          placeholder={
            currentData ? currentData?.live_url : "Add project live url"
          }
          id="liveUrl"
          name="liveUrl"
          required
        />
      </div>

      <div className="mb-5">
        <label className={addProjectStyles.labelText} htmlFor="projectYear">
          Project Year
        </label>
        <input
          className={`${addProjectStyles.inputStyle}`}
          type="number"
          placeholder={currentData ? currentData?.projectYear : "Project Year"}
          id="projectYear"
          name="projectYear"
          required
        />
      </div>

      <div className="mb-5">
        <h1 className={`${addProjectStyles.headingText} mt-14`}>Source Code</h1>
        <div className="grid lg:grid-cols-2 gap-5">
          <div>
            <label className={addProjectStyles.labelText} htmlFor="clientUrl">
              Client Github URL
            </label>
            <input
              className={`${addProjectStyles.inputStyle}`}
              type="text"
              placeholder={
                currentData ? currentData?.source?.client : "Client Github URL"
              }
              id="clientUrl"
              name="clientUrl"
              required
            />
          </div>
          <div>
            <label className={addProjectStyles.labelText} htmlFor="serverUrl">
              Server Github URL
            </label>
            <input
              className={`${addProjectStyles.inputStyle}`}
              type="text"
              placeholder={
                currentData ? currentData?.source?.server : "Server Github URL"
              }
              id="serverUrl"
              name="serverUrl"
              required
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
              placeholder={
                currentData
                  ? currentData?.feature_1?.heading
                  : "Feature heading"
              }
              id="f1"
              name="f1_heading"
              required
            />
          </div>
          <div>
            <label className={addProjectStyles.labelText} htmlFor="f2">
              Details
            </label>
            <input
              className={`${addProjectStyles.inputStyle}`}
              type="text"
              placeholder={
                currentData ? currentData?.feature_1?.detail : "Feature Details"
              }
              id="f2"
              name="f1_details"
              required
            />
          </div>

          <div>
            <label className={addProjectStyles.labelText} htmlFor="f3">
              Feature Thumbnail
              {currentData ? <img src={currentData?.feature_1?.image} /> : ""}
            </label>
            <input
              onChange={f_1}
              className={`${addProjectStyles.inputStyle} ${addProjectStyles.fileInput}`}
              type="file"
              placeholder="Feature Thumbnail"
              id="f3"
              name="f1_thumbnail"
              required
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
              <label className={addProjectStyles.labelText} htmlFor="f4">
                Heading
              </label>
              <input
                className={`${addProjectStyles.inputStyle}`}
                type="text"
                placeholder={
                  currentData
                    ? currentData?.feature_2?.heading
                    : "Feature Heading"
                }
                id="f4"
                name="f2_heading"
                required
              />
            </div>
            <div>
              <label className={addProjectStyles.labelText} htmlFor="f5">
                Details
              </label>
              <input
                className={`${addProjectStyles.inputStyle}`}
                type="text"
                placeholder={
                  currentData
                    ? currentData?.feature_2?.detail
                    : "Feature Details"
                }
                id="f5"
                name="f2_details"
                required
              />
            </div>

            <div>
              <label className={addProjectStyles.labelText} htmlFor="f6">
                Feature Thumbnail
                {currentData ? <img src={currentData?.feature_2?.image} /> : ""}
              </label>
              <input
                onChange={f_2}
                className={`${addProjectStyles.inputStyle} ${addProjectStyles.fileInput}`}
                type="file"
                placeholder="Feature Thumbnail"
                id="f6"
                name="f2_thumbnail"
                required
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
              <label className={addProjectStyles.labelText} htmlFor="f7">
                Heading
              </label>
              <input
                className={`${addProjectStyles.inputStyle}`}
                type="text"
                placeholder={
                  currentData
                    ? currentData?.feature_3?.heading
                    : "Feature Heading"
                }
                id="f7"
                name="f3_heading"
                required
              />
            </div>
            <div>
              <label className={addProjectStyles.labelText} htmlFor="f8">
                Details
              </label>
              <input
                className={`${addProjectStyles.inputStyle}`}
                type="text"
                placeholder={
                  currentData
                    ? currentData?.feature_3?.detail
                    : "Feature Details"
                }
                id="f8"
                name="f3_details"
                required
              />
            </div>

            <div>
              <label className={addProjectStyles.labelText} htmlFor="f9">
                Feature Thumbnail
                {currentData ? <img src={currentData?.feature_3?.image} /> : ""}
              </label>
              <input
                onChange={f_3}
                className={`${addProjectStyles.inputStyle} ${addProjectStyles.fileInput}`}
                type="file"
                placeholder="Feature Thumbnail"
                id="f9"
                name="f3_thumbnail"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className={`${addProjectStyles.headingText} mt-14`}>
          Technologies
        </h1>
        <div className="mt-5 grid lg:grid-cols-2  gap-10">
          <div className="w-full">
            <label htmlFor="Tech" className={addProjectStyles.labelText}>
              Core
              {currentData ? (
                <ul className="flex items-center gap-2">
                  {currentData?.coreTechs?.map((tech, index) => (
                    <li
                      className="h-7 px-3 text-[14px] flex items-center justify-center rounded-full bg-slate-100 mb-3 text-xs"
                      key={index}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </label>
            <div className={`flex flex-wrap items-center gap-4`}>
              {coreTechs?.map((tech, index) => (
                <p
                  className="h-7 px-3 text-[12px] flex items-center justify-center rounded-full bg-slate-100 mb-3"
                  key={index}
                >
                  {tech}{" "}
                </p>
              ))}
            </div>
            <MultiSelectDropdown
              id={"Tech"}
              styles={addProjectStyles.inputStyle}
              options={options}
              handleOnChange={handleOnChangeCoreTechs}
            />
          </div>
          <div className="w-full">
            <label htmlFor="allUsedTech" className={addProjectStyles.labelText}>
              All Used
              {currentData ? (
                <ul className="flex items-center gap-2">
                  {currentData?.usedTechnologies?.map((tech, index) => (
                    <li
                      className="h-7 px-3 text-[14px] flex items-center justify-center rounded-full bg-slate-100 mb-3 text-xs"
                      key={index}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </label>
            <div className={`flex flex-wrap items-center gap-4`}>
              {allUsedTechs?.map((tech, index) => (
                <p
                  className="h-7 px-3 text-[14px] flex items-center justify-center rounded-full bg-slate-100 mb-3"
                  key={index}
                >
                  {tech}{" "}
                </p>
              ))}
            </div>
            <MultiSelectDropdown
              id={"allUsedTech"}
              styles={addProjectStyles.inputStyle}
              options={options}
              handleOnChange={handleOnChangeAllUsedTechs}
            />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[30vh] right-[10vw]">
        <button
          type="submit"
          className="relative w-28 h-28 flex justify-center items-center border rounded-full hover:bg-black hover:text-white transition delay-200 ease-in text-[18px] active:text-[25px]"
        >
          Add
          <span className="absolute -right-10 -top-10">
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
                d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
              />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;
