import { Dropdown } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1TsyHRLPl7TvTEl8sbJYZFU26WYLMlxgr/view?usp=sharing"
      >
        Resume Ayush Kumar
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a href="mailto:https:ayushsingh.8d@gmail.com">ayushsingh.8d@gmail.com</a>
    ),

    disabled: true,
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Skilled in React.js Next.js Tailwind CSS
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'Danger',
  },
];
export default function DropDown({ label, iconleft, iconright, clickable }) {
  return (
    <Dropdown menu={{ items }} trigger={[`${clickable ? 'click' : 'hover'}`]}>
      <a onClick={(e) => e.preventDefault()}>
        <button className="flex text-sm items-center gap-2 cursor-pointer shadow-sm p-2 rounded border border-[#e5e7eb] hover:bg-gray-100 transition-all ">
          {iconleft}
          {label}
          {iconright}
        </button>
      </a>
    </Dropdown>
  );
}
