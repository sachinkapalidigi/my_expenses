import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const Sidebar = () => {
  return (
    <Sider
      width={200}
      className="site-layout-background"
      breakpoint="sm"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['2']}
        style={{ height: '100vh', borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to="/dashboard/categories">Categories</Link>
        </Menu.Item>
        <Menu.Item key="2">
          {' '}
          <Link to="/dashboard/expenses">Expenses</Link>
        </Menu.Item>
        <Menu.Item key="3" disabled>
          Profile
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
