import { useGetCoursesQuery } from "../../redux/features/course/courseApi";
import { styles } from "../../styles";
import { HR } from "../common/HR";
import ShadowFont from "../common/ShadowFont";
import Spinner from "../preloader/Spinner";
import CourseCard from "./CourseCard";

const Courses = () => {
  const { data: courses, isLoading } = useGetCoursesQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {courses?.data?.length > 0 && (
        <section id="portfolio" className="w-ful min-h-screen stripeBG pb-32">
          <section className={`${styles.paddingX}  text-slate-300 relative`}>
            <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" />
            <section className="max-w-screen-2xl mx-auto pt-20">
              <ShadowFont>Courses & Certificates</ShadowFont>

              <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                {courses?.data?.slice(0, 4)?.map((course) => (
                  <CourseCard course={course} key={course?._id} />
                ))}
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default Courses;
