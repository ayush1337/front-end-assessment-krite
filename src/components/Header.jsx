import { useContext, useEffect, useState } from 'react';
import {
  ChatBubbleLeftRightIcon,
  Cog8ToothIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import DropDown from './Dropdown';
import { SearchContext } from '@/utils/Context';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [_, setContext] = useContext(SearchContext);

  useEffect(() => {
    setContext(() => searchQuery);
  }, [searchQuery]);

  return (
    <header className="px-4 py-3 flex gap-6 flex-col items-start sm:flex-row">
      <h1 className="font-bold text-lg">Products</h1>
      <button className="sm:ml-auto flex items-center gap-2 p-2 shadow-sm border border-[#e5e7eb] rounded sm:w-fit w-full">
        <MagnifyingGlassIcon className="text-black w-4 h-4" />
        <input
          type="text"
          placeholder="Search for..."
          className="focus:outline-none placeholder:text-sm w-full"
          onChange={(e) => {
            setSearchQuery(() => e.target.value);
          }}
        />
      </button>
      <DropDown
        iconleft={<ChatBubbleLeftRightIcon className="text-black w-4 h-4" />}
        label={<span className="sm:hidden text-xs">Chats</span>}
        clickable={true}
      />
      <DropDown
        iconleft={<Cog8ToothIcon className="text-black w-4 h-4" />}
        label={<span className="sm:hidden text-xs">Settings</span>}
        clickable={true}
      />
    </header>
  );
}
