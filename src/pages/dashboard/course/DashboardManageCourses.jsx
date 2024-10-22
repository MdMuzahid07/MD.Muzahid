import { addProjectStyles, styles } from "../../../styles";

//! fake data for ui purpose only

const courses = [
  {
    _id: "1",
    courseName: "Full Stack Web Development",
    institution: "Coursera",
    completionDate: "2022-05-15",
    certificateLink: "https://example.com/certificate1",
    skillsLearned: ["JavaScript", "React", "Node.js"],
  },
  {
    _id: "2",
    courseName: "Data Science",
    institution: "Udemy",
    completionDate: "2023-01-10",
    certificateLink: "",
    skillsLearned: ["Python", "Machine Learning"],
  },
];

const DashboardManageCourses = () => {
  const handleDelete = () => {};
  const handleUpdate = () => {};

  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-20`}>
      <h1 className={`${addProjectStyles.headingText} mb-14`}>
        Manage Courses
      </h1>
      <section className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-t bg-slate-100 text-left">
              <th className="px-4 py-7 border-b">Course Name</th>
              <th className="px-4 py-7 border-b">Institution</th>
              <th className="px-4 py-7 border-b">Completion Date</th>
              <th className="px-4 py-7 border-b">Certificate Link</th>
              <th className="px-4 py-7 border-b">Skills Learned</th>
              <th className="px-4 py-7 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses?.length > 0 ? (
              courses?.map((course) => (
                <tr key={course._id} className="hover:bg-gray-100">
                  <td className="px-4 py-7 border-b">{course.courseName}</td>
                  <td className="px-4 py-7 border-b">{course.institution}</td>
                  <td className="px-4 py-7 border-b">
                    {course.completionDate}
                  </td>
                  <td className="px-4 py-7 border-b">
                    {course.certificateLink ? (
                      <a
                        href={course.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 underline"
                      >
                        View Certificate
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="px-4 py-7 border-b">
                    {course.skillsLearned.length > 0
                      ? course.skillsLearned.join(", ")
                      : "No skills"}
                  </td>
                  <td className="px-4 py-7 border-b">
                    <button
                      onClick={() => handleUpdate(course)}
                      className="mr-2 px-4 py-1 bg-black text-white rounded-full"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="px-4 py-1 bg-red-500 text-white rounded-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-7 text-xl text-red-500 text-center border-b"
                >
                  No course available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default DashboardManageCourses;
