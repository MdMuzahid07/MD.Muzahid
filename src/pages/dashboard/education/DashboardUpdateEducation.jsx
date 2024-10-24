import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { addProjectStyles, styles } from "../../../styles";
import MultiSelector from "../../../components/ui/MultiSelector";
import {
  useAddEducationMutation,
  useUpdateEductionMutation,
} from "../../../redux/features/education/educationApi";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const fakeSkillsOptions = [
  { _id: "1", name: "JavaScript", icon: "🟨" },
  { _id: "2", name: "React", icon: "⚛️" },
  { _id: "3", name: "Node.js", icon: "🟩" },
  { _id: "4", name: "MongoDB", icon: "🍃" },
  { _id: "5", name: "TypeScript", icon: "🔷" },
];

const DashboardUpdateEducation = () => {
  const { educationId } = useParams();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [updateEducationById, { data, error, isLoading }] =
    useUpdateEductionMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      location: "",
      gpa: "",
      description: "",
      achievements: [],
    },
  });

  const onSubmit = async (data) => {
    data.startDate = startDate;
    data.endDate = endDate;
    data.achievements = achievements;

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
      await updateEducationById({ id: educationId, data: updateData });
    } catch (error) {
      toast.error(error?.message, { id: "addEducationToastId" });
    }
    reset();
    setStartDate(null);
    setEndDate(null);
  };

  if (isLoading && !error) {
    toast.loading("Posting...", { id: "addEducationToastId" });
  }

  if (data && data?.success) {
    toast.success("Done...", { id: "addEducationToastId" });
  }

  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-20`}>
      <h1 className={`${addProjectStyles.headingText} mb-14`}>Add Education</h1>

      <section>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Institution */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Institution <span className="text-red-500">*</span>
            </label>
            <input
              {...register("institution", {})}
              className="w-full px-4 py-2 border rounded-2xl h-16 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter institution name"
            />
            {errors.institution && (
              <p className="text-red-500 text-sm mt-1">
                {errors.institution.message}
              </p>
            )}
          </section>

          {/* Degree */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Degree <span className="text-red-500">*</span>
            </label>
            <input
              {...register("degree", {})}
              className="w-full px-4 py-2 border rounded-2xl h-16 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter degree"
            />
            {errors.degree && (
              <p className="text-red-500 text-sm mt-1">
                {errors.degree.message}
              </p>
            )}
          </section>

          {/* Field of Study */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Field of Study <span className="text-red-500">*</span>
            </label>
            <input
              {...register("fieldOfStudy", {})}
              className="w-full px-4 py-2 border rounded-2xl h-16 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter field of study"
            />
            {errors.fieldOfStudy && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fieldOfStudy.message}
              </p>
            )}
          </section>

          {/* Start Date */}
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

          {/* End Date */}
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

          {/* Location */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              {...register("location", {})}
              className="w-full px-4 py-2 border rounded-2xl h-16 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter location"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </section>

          {/* GPA */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              GPA (optional)
            </label>
            <input
              {...register("gpa")}
              className="w-full px-4 py-2 border rounded-2xl h-16 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter GPA"
            />
          </section>

          {/* Description */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Description (optional)
            </label>
            <textarea
              {...register("description")}
              className="w-full px-4 py-2 border rounded-2xl h-24 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter description"
            />
          </section>

          {/* Achievements */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Achievements (optional)
            </label>
            <MultiSelector
              options={fakeSkillsOptions}
              selectedOptions={achievements}
              setSelectedOptions={setAchievements}
            />
          </section>

          {/* Submit Button */}
          <section className="flex justify-end pt-20 pr-20">
            <button
              type="submit"
              className="relative w-28 h-28 flex justify-center items-center border rounded-full hover:bg-black hover:text-slate-300 transition delay-200 ease-in text-2xl active:text-[25px]"
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
          </section>
        </form>
      </section>
    </section>
  );
};

export default DashboardUpdateEducation;
