import React, { useState } from 'react';
import { LaptopOutlined, MailOutlined, TeamOutlined,HomeOutlined  } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Courses',
    key: 'courses',
    icon: <LaptopOutlined />,
  },
  {
    label: 'Contact Us',
    key: 'contact',
    icon: <MailOutlined />,
  },
  {
    label: 'About Us',
    key: 'about',
    icon: <TeamOutlined />,
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navbar;
