import {
  ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
export default function Header() {
  return (
    <header className="px-4 py-3 flex gap-6">
      <h1 className="font-bold text-lg">Products</h1>
      <button className="ml-auto flex items-center gap-2 p-2 shadow-sm border border-[#e5e7eb] rounded">
        <MagnifyingGlassIcon className="text-black w-4 h-4" />
        <input
          type="text"
          placeholder="Search for..."
          className="focus:outline-none placeholder:text-sm"
        />
      </button>
      <button className="flex items-center gap-2 p-2 shadow-sm border border-[#e5e7eb] rounded cursor-pointer hover:bg-gray-100 transition-all">
        <ChatBubbleLeftRightIcon className="text-black w-4 h-4" />
      </button>
      <button className="flex items-center gap-2 p-2 shadow-sm border border-[#e5e7eb] rounded cursor-pointer hover:bg-gray-100 transition-all">
        <Cog8ToothIcon className="text-black w-4 h-4" />
      </button>
    </header>
  );
}
