/* eslint-disable react/prop-types */
const AddSkillAndHobbyManageTable = ({ data, handleUpdate, handleDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse ">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border-b text-sm border-slate-300 pl-7 pr-4 py-5">
              No
            </th>
            <th className="border-b text-sm border-slate-300 px-4 py-5">
              Logo
            </th>
            <th className="border-b text-sm border-slate-300 px-4 py-5">
              Name
            </th>
            <th className="border-b text-sm border-slate-300 px-4 py-5">URL</th>
            <th className="border-b text-sm border-slate-300 px-4 py-5">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50 px-7">
              <td className="border-b text-sm border-slate-300 px-4 py-5 text-center">
                {index + 1}
              </td>
              <td className="border-b text-sm border-slate-300 px-4 py-5">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-16 w-16 rounded-full border-2 border-slate-200 p-1 object-contain"
                />
              </td>
              <td className="border-b text-sm border-slate-300 px-4 py-5">
                {item.name}
              </td>
              <td className="border-b text-sm border-slate-300 px-4 py-5">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-blue-500 underline"
                >
                  {item.url}
                </a>
              </td>
              <td className="border-b text-sm border-slate-300 px-4 py-5 space-x-2">
                <button
                  onClick={() => handleUpdate(item.id)}
                  className="px-4 py-1 bg-primary text-white rounded-full hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddSkillAndHobbyManageTable;
