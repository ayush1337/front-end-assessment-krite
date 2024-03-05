import tabledata from '../utils/tabledata.json';
import colorVariants from '../utils/colorVariants';
export default function DataTable() {
  return (
    <>
      <div className="bg-white  flex flex-col gap-3 w-full">
        <div className="overflow-auto">
          <table className="w-full">
            <thead className="opacity-55 text-normal text-left">
              <tr className="[&>*]:px-4 [&>*]:py-3 ">
                <th>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="cursor-pointer accent-black w-4 h-4 opacity-30 checked:opacity-100"
                    />
                    Brand
                  </div>
                </th>
                <th>Description</th>
                <th>Members</th>
                <th>Categories</th>
                <th>Tags</th>
                <th>Next Meeting</th>
              </tr>
            </thead>

            <tbody className="divide-y bg-white ">
              {tabledata.map((company) => {
                return (
                  <tr
                    key={company.brand_name}
                    className="[&>*]:px-4 [&>*]:py-3 font-medium  text-sm"
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="cursor-pointer accent-black w-4 h-4 opacity-30 checked:opacity-100"
                        />
                        <div className="rounded-md w-7 overflow-hidden  ">
                          <img
                            src={company.brand_logo}
                            alt={company.brand_name}
                            className="w-full object-cover"
                          />
                        </div>
                        {company.brand_name}
                        {company.brand_chat ? (
                          <div className="opacity-55 flex items-center gap-2 text-sm ml-auto">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                              />
                            </svg>
                            {company.brand_chat}
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </td>
                    <td className="max-w-[50px] truncate">
                      {company.description}
                    </td>
                    <td>{company.members.length}</td>
                    <td>
                      <div className="flex gap-2 items-center">
                        {company.categories.map((category) => {
                          const { label, color } = category;
                          return (
                            <span
                              key={label}
                              className={`${colorVariants[color]} border px-2 py-1 rounded capitalize`}
                            >
                              {label}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td>
                      {company.tags.map((tag) => {
                        return <>{tag}</>;
                      })}
                    </td>
                    <td>{company.time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
