import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { addProjectStyles, styles } from "../../../styles";
import MultiSelector from "../../../components/ui/MultiSelector";
import { useAddExperienceMutation } from "../../../redux/features/experience/experienceApi";
import toast from "react-hot-toast";
import { useGetAllSkillsQuery } from "../../../redux/features/skill/skillApi";
import Spinner from "../../../components/preloader/Spinner";

const employmentTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Internship",
];

const DashboardAddExperience = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [addExperience, { data: experienceData, error, isLoading }] =
    useAddExperienceMutation();
  const { data: skills, isLoading: isSkillLoading } = useGetAllSkillsQuery();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company: "",
      position: "",
      location: "",
      responsibilities: "",
      employmentType: "",
      companyWebsite: "",
      achievements: "",
    },
  });

  if (isSkillLoading) {
    return <Spinner />;
  }

  const onSubmit = async (data) => {
    data.startDate = startDate;
    data.endDate = endDate;
    data.technologiesUsed = selectedSkills;
    try {
      await addExperience(data);
      reset();
      setStartDate(null);
      setEndDate(null);
      setSelectedSkills([]);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading && !error) {
    toast.loading("Posting...", { id: "addExperienceToastId" });
  }

  if (error) {
    toast.error(error?.data?.message, { id: "addExperienceToastId" });
  }

  if (experienceData && experienceData?.success) {
    toast.success("Done...", { id: "addExperienceToastId" });
  }

  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-20`}>
      <h1 className={`${addProjectStyles.headingText} mb-14`}>
        Add Experience
      </h1>

      <section>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* // Company Name start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("company", {
                required: "Company name is required",
              })}
              className="w-full px-4 py-2 border rounded-2xl h-16 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter company name"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.message}
              </p>
            )}
          </section>
          {/* // Company Name end ====================> */}
          {/* // Position start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Position <span className="text-red-500">*</span>
            </label>
            <input
              {...register("position", {
                required: "Position is required",
              })}
              className="w-full px-4 py-2 border rounded-2xl h-14 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter position"
            />
            {errors.position && (
              <p className="text-red-500 text-sm mt-1">
                {errors.position.message}
              </p>
            )}
          </section>
          {/* // Position end ====================> */}
          {/* // Start Date start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Start Date <span className="text-red-500">*</span>
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select start date"
              className="w-full px-4 py-2 border rounded-2xl h-14 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.startDate.message}
              </p>
            )}
          </section>
          {/* // Start Date end ====================> */}
          {/* // End Date start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              End Date <span className="text-red-500">*</span>
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select end date"
              className="w-full px-4 py-2 border rounded-2xl h-14 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.endDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.endDate.message}
              </p>
            )}
          </section>
          {/* // End Date end ====================> */}
          {/* // Location start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              {...register("location", {
                required: "Location is required",
              })}
              className="w-full px-4 py-2 border rounded-2xl h-14 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter location"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </section>
          {/* // Location end ====================> */}
          {/* // Responsibilities start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Responsibilities <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("responsibilities", {
                required: "Responsibilities are required",
              })}
              className="w-full px-4 py-2 border rounded-2xl h-24 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter responsibilities (separate with commas)"
            />
            {errors.responsibilities && (
              <p className="text-red-500 text-sm mt-1">
                {errors.responsibilities.message}
              </p>
            )}
          </section>
          {/* // Responsibilities end ====================> */}

          {/* // achievements start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Achievements <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("achievements", {
                required: "achievements are required",
              })}
              className="w-full px-4 py-2 border rounded-2xl h-24 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter achievements (separate with commas)"
            />
            {errors.achievements && (
              <p className="text-red-500 text-sm mt-1">
                {errors.achievements.message}
              </p>
            )}
          </section>
          {/* // achievements end ====================> */}
          {/* // Technologies Used start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Technologies Used <span className="text-red-500">*</span>
            </label>
            <MultiSelector
              options={skills?.data}
              selectedOptions={selectedSkills}
              setSelectedOptions={setSelectedSkills}
            />

            {errors.skillsLearned && (
              <p className="text-red-500 text-sm mt-1">
                {errors.skillsLearned.message}
              </p>
            )}
          </section>
          {/* // Technologies Used end ====================> */}
          {/* // Employment Type start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Employment Type <span className="text-red-500">*</span>
            </label>
            <select
              {...register("employmentType", {
                required: "Employment type is required",
              })}
              className="w-full px-4 py-2 border rounded-2xl h-14 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Employment Type</option>
              {employmentTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.employmentType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.employmentType.message}
              </p>
            )}
          </section>
          {/* // Employment Type end ====================> */}
          {/* // Company Website start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Company Website (optional)
            </label>
            <input
              {...register("companyWebsite")}
              className="w-full px-4 py-2 border rounded-2xl h-14 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter company website"
            />
          </section>
          {/* // Company Website end ====================> */}
          {/* // Submit Button start ====================> */}
          <section className="flex justify-end pt-20 pr-20">
            <button
              type="submit"
              className="relative w-28 h-28 flex justify-center items-center border rounded-full hover:bg-black hover:text-slate-300 transition delay-200 ease-in text-2xl active:text-[25px]"
            >
              Add
            </button>
          </section>
          {/* // Submit Button end ====================> */}
        </form>
      </section>
    </section>
  );
};

export default DashboardAddExperience;
