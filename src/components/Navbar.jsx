import {
  ArrowUpRightIcon,
  Bars4Icon,
  CodeBracketIcon,
  MegaphoneIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  PlusIcon,
  UserPlusIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import SubMenu from './SubMenu';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const teams = [
    {
      label: 'Design Team',
      icon: <PencilSquareIcon className="w-4 h-4 text-black" />,
    },
    {
      label: 'Marketing Team',
      icon: <MegaphoneIcon className="w-4 h-4 text-black" />,
    },
    {
      label: 'Development Team',
      icon: <CodeBracketIcon className="w-4 h-4 text-black" />,
    },
    {
      label: 'Create a Team',
      icon: <PlusCircleIcon className="w-5 h-5 text-black" />,
    },
  ];
  return (
    <>
      <button
        onClick={() => {
          setMenuOpen((p) => !p);
        }}
      >
        <Bars4Icon className="text-black w-[20px] h-[20px] opacity-55 xl:hidden block" />
      </button>

      <nav
        className={` ${
          menuOpen
            ? 'top-0 left-0 absolute z-10 md:w-1/2 w-full flex h-full'
            : 'hidden'
        }  flex-col gap-4 min-h-screen border rounded-xl border-[#e5e7eb] xl:flex p-2 bg-white`}
      >
        {menuOpen && (
          <button
            onClick={() => {
              setMenuOpen((p) => !p);
            }}
          >
            <XCircleIcon className={`w-6 h-6 text-black opacity-75 ml-auto`} />
          </button>
        )}

        <div className="flex gap-12 w-full">
          <button className="flex gap-2 items-center">
            <div className="w-10">
              <img
                src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
                alt="logo"
                className="w-full"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-medium opacity-35">INC</span>
              <span className="font-bold">InnovateHub</span>
            </div>
          </button>
          <button className="rounded-full overflow-hidden w-8 h-8 ml-auto">
            <img
              src="https://img.freepik.com/free-photo/handsome-woman-s-portrait-isolated-pink-studio-background-neon-light-monochrome-beautiful-female-model-concept-human-emotions-facial-expression-sales-ad-fashion-beauty_155003-34463.jpg"
              className="w-full object-cover h-full object-top"
              alt="potrait"
            />
          </button>
        </div>
        <div className="[&>*]:p-2  rounded-xl border border-[#e5e7eb] font-semibold flex flex-col  items-start">
          {teams.map((team, i) => {
            const last = teams.length - 1 === i;
            return (
              <button
                key={team.label}
                data-last={last}
                className="text-sm data-[last=true]:border-t data-[last=true]:opacity-55 border-[#e5e7eb] w-full flex items-center gap-1 hover:bg-gray-100 transition-all"
              >
                {team.icon}
                <span>{team.label}</span>
                <span className="ml-auto bg-gray-50 border border-[#e5e7eb] text-gray-400 text-xs px-2 py-1 rounded">
                  x{i + 1}
                </span>
              </button>
            );
          })}
        </div>

        <button className=" text-sm border-[#e5e7eb] opacity-55 w-full flex items-center gap-1 hover:bg-gray-100 transition-all p-2 rounded-md">
          <span className="uppercase font-semibold">Folders</span>
          <PlusIcon className="w-5 h-5 text-black ml-auto" />
        </button>

        <SubMenu />

        <button className="mt-auto text-sm border-[#e5e7eb] w-full flex items-center gap-1 hover:bg-gray-100 transition-all p-2 rounded-md">
          <ArrowUpRightIcon className="w-5 h-5 text-black" />
          <span>Visit Resume</span>
        </button>
        <button className=" text-sm border-[#e5e7eb] w-full flex items-center gap-1 hover:bg-gray-100 transition-all p-2 rounded-md">
          <UserPlusIcon className="w-5 h-5 text-black" />
          <span>Invite teammates</span>
        </button>
        <button className="text-sm border-[#e5e7eb] w-full flex items-center gap-1 bg-gray-100 p-2 rounded-md">
          <span>7 days left</span>
          <span className="px-2 py-1 bg-black rounded-md text-white ml-auto">
            Add billing
          </span>
        </button>
      </nav>
    </>
  );
}
