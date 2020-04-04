import React from 'react';
import { Layout, Menu, Typography, Row, Col } from 'antd';
import './App.css';

const { Header, Content, Sider, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout>
      <Header className="header">
        <Row>
          <Col span={4}>
            <div className="logo" />
          </Col>
          <Col span={6} offset={14}>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ justifyContent: 'flex-end' }}
            >
              <Menu.Item key="1">Item 1</Menu.Item>
              <Menu.Item key="2">Item 2</Menu.Item>
              <Menu.Item key="3">Item 3</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Layout>
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
            defaultSelectedKeys={['1']}
            style={{ height: '100vh', borderRight: 0 }}
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Title level={3} style={{ margin: '16px 0' }}>
            Page Name
          </Title>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Page Content
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Expense Tracker ©2018 Created by Sachin CV
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
