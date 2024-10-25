/* eslint-disable react/prop-types */
const ExperienceDetailsCard = ({ experience }) => {
  console.log(experience);

  return (
    <section className="flex flex-col gap-6 p-6 bg-gradient-to-br from-primary to-secondary border-2 border-purple-400 rounded-2xl shadow-lg shadow-secondary hover:shadow-pink-500 transition-all transform hover:scale-105 hover:shadow-2xl duration-300">
      <section className="flex flex-col md:flex-row justify-between items-center">
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-secondary"
          src={
            experience?.logo
              ? experience?.logo
              : "https://res.cloudinary.com/dlxfcyc7x/image/upload/v1729855294/xt4oxilvlymeei7ryxsb.png"
          }
          alt={`${experience?.company} logo`}
        />
        <div className="flex-1 md:ml-6 mt-4 md:mt-0">
          <h2 className="text-white text-3xl font-bold">
            {experience?.position}
          </h2>
          <p className="text-slate-300 text-lg">
            {experience?.company} - {experience?.location}
          </p>
          <p className="text-slate-400 text-sm">
            {new Date(experience?.startDate).toLocaleDateString()} -{" "}
            {new Date(experience?.endDate).toLocaleDateString()} (
            {experience?.employmentType})
          </p>
          <a
            href={experience?.companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-slate-300 hover:text-blue-500"
          >
            Visit Company Website
          </a>
        </div>
      </section>

      <section>
        <h3 className="text-white text-xl font-semibold mb-2">Achievements</h3>
        <p className="text-slate-300 mb-4">{experience?.achievements}</p>

        <h3 className="text-white text-xl font-semibold mb-2">
          Responsibilities
        </h3>
        <p className="text-slate-300">{experience?.responsibilities}</p>
      </section>

      <section>
        <h3 className="text-white text-xl font-semibold mb-2">
          Technologies Used
        </h3>
        <section className="flex flex-wrap gap-3">
          {experience?.technologiesUsed?.map((tech) => (
            <span
              key={tech?._id}
              className="bg-gradient-to-r from-pink-500 to-purple-600 flex items-center gap-2 text-white text-sm pl-2 pr-4 rounded-full shadow-lg"
            >
              <img
                className="w-10 h-10 p-1 rounded-full"
                src={tech?.icon}
                alt=""
              />{" "}
              <span className="text-2xl">{tech?.name}</span>
            </span>
          ))}
        </section>
      </section>
    </section>
  );
};

export default ExperienceDetailsCard;
