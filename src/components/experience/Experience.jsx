import { useGetExperienceQuery } from "../../redux/features/experience/experienceApi";
import { styles } from "../../styles";
import { HR } from "../common/HR";
import ShadowFont from "../common/ShadowFont";
import Spinner from "../preloader/Spinner";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const { data: experiences, isLoading } = useGetExperienceQuery();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {experiences?.data?.length > 0 && (
        <section id="portfolio" className="w-ful min-h-screen stripeBG pb-32">
          <section className={`${styles.paddingX}  text-slate-300 relative`}>
            <HR style="bg-black border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[1px]" />
            <section className="max-w-screen-2xl mx-auto pt-20">
              <ShadowFont>My Experience</ShadowFont>

              <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                {experiences?.data?.slice(0, 4)?.map((experience) => (
                  <ExperienceCard
                    experience={experience}
                    key={experience?._id}
                  />
                ))}
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default Experience;
