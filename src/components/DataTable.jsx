import { ChatBubbleLeftRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import tabledata from '../utils/tabledata.json';
import colorVariants from '../utils/colorVariants';

export default function DataTable() {
  return (
    <>
      <div className="bg-white  flex flex-col gap-3 w-full">
        <div className="overflow-auto">
          <table className="w-full">
            <thead className="text-normal text-left">
              <tr className="[&>*]:px-4">
                <th>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="cursor-pointer accent-black w-4 h-4 opacity-30 checked:opacity-100"
                    />
                    <span className="opacity-55">Brand</span>
                    <PlusIcon className="w-5 h-5 opacity-55 ml-auto" />
                  </div>
                </th>
                <th className="opacity-55">Description</th>
                <th className="opacity-55">Members</th>
                <th className="opacity-55">Categories</th>
                <th className="opacity-55">Tags</th>
                <th className="opacity-55">Next Meeting</th>
              </tr>
            </thead>

            <tbody className="divide-y bg-white">
              {tabledata.map((company) => {
                return (
                  <tr
                    key={company.brand_name}
                    className="[&>*]:px-4 [&>*]: font-medium"
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
                          <div className="opacity-55 flex items-center gap-2 ml-auto">
                            <ChatBubbleLeftRightIcon className="w-5 h-5" />
                            {company.brand_chat}
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </td>
                    <td className="max-w-[200px] truncate">
                      {company.description}
                    </td>
                    <td className="relative">
                      {company.members.map((member, idx) => {
                        return (
                          <div
                            key={member}
                            style={{ left: idx * 20 }}
                            className={`absolute top-1/2  -translate-y-1/2 rounded-full w-8 h-8 border-2 border-white bg-black overflow-hidden`}
                          >
                            <img
                              src={member}
                              alt="member"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        );
                      })}
                    </td>
                    <td className="text-sm">
                      <div className="flex gap-2 items-center  ">
                        {company.categories.map((category) => {
                          const { label, color } = category;
                          return (
                            <span
                              key={label}
                              className={`${colorVariants[color]} border px-2 py-1 rounded-lg capitalize`}
                            >
                              {label}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="overflow-hidden max-w-[50px]  text-xs">
                      <div className="flex gap-2 overflow-hidden">
                        {company.tags.map((tag) => {
                          return (
                            <div
                              key={tag}
                              className="bg-gray-100 border border-gray-400 text-gray-400 rounded-md px-2 py-1 cursor-pointer"
                            >
                              #{tag}
                            </div>
                          );
                        })}
                      </div>
                    </td>
                    <td className="overflow-hidden max-w-[50px] text-xs">
                      <div className="flex items-center justify-start ">
                        <span className="bg-green-50 border border-green-600 text-green-600 rounded-md px-2">
                          {company.time}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
              <tr className="text-end [&>*]:px-4 [&>*]: font-medium text-xs">
                <td>
                  {tabledata.length}
                  <span className="ml-2 opacity-55">count</span>
                </td>
                {Array(4)
                  .fill(0)
                  .map((_, idx) => {
                    return (
                      <td key={idx} className="opacity-55 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <PlusIcon className="w-5 h-5 opacity-55 ml-auto" />
                          Add calculation
                        </div>
                      </td>
                    );
                  })}

                <td className="opacity-55"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
