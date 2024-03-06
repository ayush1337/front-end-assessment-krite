import React, { useState } from 'react';
import { Menu } from 'antd';
import { FolderOpenIcon } from '@heroicons/react/24/outline';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    'Products',
    'sub1',
    <FolderOpenIcon className="text-black w-5 h-5" />,
    [
      getItem('Ayush Kumar', '1'),
      getItem('ayushsingh.8d@gmail.com', '2'),
      getItem('Frontend Developer', '3'),
      getItem('React.js Next.js', '4'),
    ]
  ),
  getItem('Sales', 'sub2', <FolderOpenIcon className="text-black w-5 h-5" />, [
    getItem('Ayush Kumar', '5'),
    getItem('ayushsingh.8d@gmail.com', '6'),
  ]),
  getItem('Design', 'sub3', <FolderOpenIcon className="text-black w-5 h-5" />, [
    getItem('Ayush Kumar', '12'),
    getItem('ayushsingh.8d@gmail.com', '11'),
    getItem('Tailwind CSS', '9'),
    getItem('Node.js', '10'),
  ]),
  getItem('Office', 'sub4', <FolderOpenIcon className="text-black w-5 h-5" />),
  getItem('Legal', 'sub5', <FolderOpenIcon className="text-black w-5 h-5" />),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const SubMenu = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: '100%',
        border: 0,
      }}
      items={items}
    />
  );
};
export default SubMenu;
