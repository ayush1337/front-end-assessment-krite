import {
  QueueListIcon,
  ChevronDownIcon,
  ArrowsUpDownIcon,
  AdjustmentsHorizontalIcon,
  PlusCircleIcon,
  FolderArrowDownIcon,
} from '@heroicons/react/24/outline';

export default function Filter() {
  return (
    <div className="px-4 py-3 border-t border-t-[#e5e7eb] flex gap-6">
      <button className="flex text-sm items-center gap-2 cursor-pointer shadow-sm p-2 rounded border border-[#e5e7eb] hover:bg-gray-100 transition-all ">
        <QueueListIcon className="h-5 w-5 text-black" />
        <span>All brands</span>
        <ChevronDownIcon className="h-3 w-3 text-black" />
      </button>
      <button className="flex text-sm items-center gap-2 cursor-pointer shadow-sm p-2 rounded border border-[#e5e7eb] hover:bg-gray-100 transition-all ">
        <span>Desk</span>
        <ChevronDownIcon className="h-3 w-3 text-black" />
      </button>
      <button className="flex text-sm items-center gap-2 cursor-pointer shadow-sm p-2 rounded border border-[#e5e7eb] hover:bg-gray-100 transition-all ">
        <span>Tags</span>
        <ChevronDownIcon className="h-3 w-3 text-black" />
      </button>
      <button
        disabled={true}
        className="opacity-55 flex text-sm items-center gap-2 cursor-not-allowed shadow-sm p-2 rounded border border-[#e5e7eb]"
      >
        <ArrowsUpDownIcon className="h-3 w-3 text-black" />
        <span>Sort</span>
      </button>
      <button
        disabled={true}
        className="opacity-55 flex text-sm items-center gap-2 cursor-not-allowed shadow-sm p-2 rounded border border-[#e5e7eb]"
      >
        <AdjustmentsHorizontalIcon className="h-3 w-3 text-black" />
        <span>Filter</span>
      </button>
      <button className=" ml-auto flex text-sm items-center gap-2 cursor-pointer shadow-sm p-2 rounded border border-[#e5e7eb] hover:bg-gray-100 transition-all ">
        <PlusCircleIcon className="h-5 w-5 text-black" />
        <span>Meetings</span>
      </button>
      <button className="flex text-sm items-center gap-2 cursor-pointer shadow-sm p-2 rounded border border-[#e5e7eb] hover:bg-gray-100 transition-all ">
        <FolderArrowDownIcon className="h-5 w-5 text-black" />
        <span>Import/Export</span>
      </button>
    </div>
  );
}
