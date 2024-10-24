import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { addProjectStyles, styles } from "../../../styles";
import MultiSelector from "../../../components/ui/MultiSelector";
import { useUpdateExperienceMutation } from "../../../redux/features/experience/experienceApi";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const employmentTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Freelance",
  "Internship",
];

const fakeSkillsOptions = [
  { _id: "1", name: "JavaScript", icon: "🟨" },
  { _id: "2", name: "React", icon: "⚛️" },
  { _id: "3", name: "Node.js", icon: "🟩" },
  { _id: "4", name: "MongoDB", icon: "🍃" },
  { _id: "5", name: "TypeScript", icon: "🔷" },
];

const DashboardUpdateExperience = () => {
  const { Id } = useParams();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [updateExperienceById, { data, error, isLoading }] =
    useUpdateExperienceMutation();

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
      technologiesUsed: [{}],
    },
  });

  console.log(error);

  const onSubmit = async (data) => {
    data.startDate = startDate;
    data.endDate = endDate;
    data.technologiesUsed = [...selectedSkills];

    // to remove empty, string, and etc
    const updateData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => {
        return (
          value !== null &&
          value !== "" &&
          !(Array.isArray(value) && value.length === 0)
        );
      })
    );

    try {
      await updateExperienceById({ id: Id, data: updateData });
    } catch (error) {
      console.log(error);
    }
    reset();
    setStartDate(null);
    setEndDate(null);
    setSelectedSkills([]);
  };

  if (isLoading && !error) {
    toast.loading("Posting...", { id: "addExperienceToastId" });
  }

  if (error) {
    toast.error(error?.data?.message, { id: "addExperienceToastId" });
  }

  if (data && data?.success) {
    toast.success("Done...", { id: "addExperienceToastId" });
  }

  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-20`}>
      <h1 className={`${addProjectStyles.headingText} mb-14`}>
        Update Experience
      </h1>

      <section>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* // Company Name start ====================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("company", {})}
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
              {...register("position", {})}
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
              {...register("location", {})}
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
              {...register("responsibilities", {})}
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
              {...register("achievements", {})}
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
              options={fakeSkillsOptions}
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
              {...register("employmentType", {})}
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

export default DashboardUpdateExperience;
