import { addProjectStyles, styles } from "../../../styles";

//! fake data for UI purpose only
const educationRecords = [
  {
    _id: "1",
    institution: "Harvard University",
    degree: "Bachelor of Computer Science",
    fieldOfStudy: "Software Engineering",
    startDate: "2015-08-10",
    endDate: "2019-05-15",
  },
  {
    _id: "2",
    institution: "Stanford University",
    degree: "Master of Data Science",
    fieldOfStudy: "Data Science",
    startDate: "2020-09-01",
    endDate: "2022-06-20",
  },
];

const DashboardManageEducations = () => {
  const handleDelete = (id) => {
    console.log("Deleting education record with id:", id);
    // Logic to delete the education record
  };

  const handleUpdate = (education) => {
    console.log("Updating education record:", education);
    // Logic to update the education record
  };

  return (
    <section className={`${styles.dashboardPageCardBgWhiteOpacity} mb-20`}>
      <h1 className={`${addProjectStyles.headingText} mb-14`}>
        Manage Education
      </h1>
      <section className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-t bg-slate-100 text-left">
              <th className="px-4 py-7 border-b">No</th>
              <th className="px-4 py-7 border-b">Institution</th>
              <th className="px-4 py-7 border-b">Degree</th>
              <th className="px-4 py-7 border-b">Field of Study</th>
              <th className="px-4 py-7 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {educationRecords?.length > 0 ? (
              educationRecords?.map((education, index) => (
                <tr key={education._id} className="hover:bg-gray-100">
                  <td className="px-4 py-7 border-b">{index + 1}</td>
                  <td className="px-4 py-7 border-b">
                    {education.institution}
                  </td>
                  <td className="px-4 py-7 border-b">{education.degree}</td>
                  <td className="px-4 py-7 border-b">
                    {education.fieldOfStudy}
                  </td>
                  <td className="px-4 py-7 border-b">
                    <button
                      onClick={() => handleUpdate(education)}
                      className="mr-2 px-4 py-1 bg-black text-white rounded-full"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(education._id)}
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
                  colSpan="5"
                  className="px-4 py-7 text-xl text-red-500 text-center border-b"
                >
                  No education records available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default DashboardManageEducations;
