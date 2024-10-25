import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { addProjectStyles, styles } from "../../../styles";
import MultiSelector from "../../../components/ui/MultiSelector";
import { usePostCourseMutation } from "../../../redux/features/course/courseApi";
import toast from "react-hot-toast";
import { useGetAllSkillsQuery } from "../../../redux/features/skill/skillApi";
import Spinner from "../../../components/preloader/Spinner";

const DashboardAddCourse = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [postCourse, { data, error, isLoading }] = usePostCourseMutation();
  const { data: skills, isLoading: isSkillLoading } = useGetAllSkillsQuery();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      courseName: "",
      institution: "",
      completionDate: "",
      certificateLink: "",
      skillsLearned: [{}],
    },
  });

  const onSubmit = async (data) => {
    data.completionDate = selectedDate;
    data.skillsLearned = [...selectedSkills];

    try {
      await postCourse(data);
    } catch (error) {
      toast.error(console.log(error), { id: "postCourseToastId" });
    }

    reset();
    setSelectedDate(null);
  };

  if (isSkillLoading) {
    return <Spinner />;
  }
  if (isLoading && !error) {
    toast.loading("Posting...", { id: "postCourseToastId" });
  }

  if (data && data?.success) {
    toast.success("Done...", { id: "postCourseToastId" });
  }

  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-20`}>
      <h1 className={`${addProjectStyles.headingText} mb-14`}>Add Course</h1>

      <section>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* // Course Name start ====================>*/}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Course Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("courseName", {
                required: "Course name is required",
              })}
              className="w-full px-4 py-2 border rounded-2xl h-16 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter course name"
            />
            {errors.courseName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.courseName.message}
              </p>
            )}
          </section>
          {/* // Course Name end ====================>*/}

          {/* // Institution start =======================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Institution <span className="text-red-500">*</span>
            </label>
            <input
              {...register("institution", {
                required: "Institution is required",
              })}
              className="w-full px-4 py-2 border rounded-2xl h-14 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter institution name"
            />
            {errors.institution && (
              <p className="text-red-500 text-sm mt-1">
                {errors.institution.message}
              </p>
            )}
          </section>
          {/* // Institution end =======================> */}

          {/* // Completion Date start ==================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Completion Date <span className="text-red-500">*</span>
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select completion date"
              className="w-full px-4 py-2 border rounded-2xl h-14 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.completionDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.completionDate.message}
              </p>
            )}
          </section>
          {/* // Completion Date end ==================> */}

          {/* // Certificate Link start ===================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Certificate Link (optional)
            </label>
            <input
              {...register("certificateLink")}
              className="w-full px-4 py-2 border rounded-2xl h-14 text-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter certificate link"
            />
          </section>
          {/* // Certificate Link end ===================> */}

          {/* // Skills Learned start ===================> */}
          <section className="flex flex-col">
            <label className="text-gray-700 text-sm font-semibold mb-2">
              Skills Learned <span className="text-red-500">*</span>
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
          {/* // Skills Learned end ===================> */}

          {/* // Submit Button start ===================> */}
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
          {/* // Submit Button end ===================> */}
        </form>
      </section>
    </section>
  );
};

export default DashboardAddCourse;
