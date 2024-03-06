import {
  ChevronDownIcon,
  ArrowsUpDownIcon,
  AdjustmentsHorizontalIcon,
  PlusCircleIcon,
  FolderArrowDownIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/outline';
import DropDown from './Dropdown';

export default function Filter() {
  return (
    <div className="px-4 py-3 border-t border-t-[#e5e7eb] flex gap-6 flex-col lg:flex-row">
      <DropDown
        iconleft={<CubeTransparentIcon className="h-5 w-5 text-black" />}
        label="All brands"
        iconright={<ChevronDownIcon className="h-3 w-3 text-black ml-auto" />}
        clickable={true}
      />
      <DropDown
        label="Desk"
        iconright={<ChevronDownIcon className="h-3 w-3 text-black ml-auto" />}
        clickable={true}
      />
      <DropDown
        label="Tags"
        iconright={<ChevronDownIcon className="h-3 w-3 text-black ml-auto" />}
      />

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
      <span className="ml-auto"></span>
      <DropDown
        iconleft={<PlusCircleIcon className="h-5 w-5 text-black" />}
        label="Meetings"
        clickable={true}
      />
      <DropDown
        iconleft={<FolderArrowDownIcon className="h-5 w-5 text-black" />}
        label="Import/Export"
        clickable={true}
      />
    </div>
  );
}
