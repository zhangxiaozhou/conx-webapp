import './App.less';

import React from 'react';

import { Outlet, Link, Routes, Route } from "react-router-dom";

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

moment.locale('zh-cn');

function App() {

  const { Header, Footer, Sider, Content } = Layout;

  const items = [
    {
      label: <Link to="/section">断面展示</Link>,
      key: 'item-1'
    }, // 菜单项务必填写 key
    {
      label: <Link to="/demo">demo</Link>,
      key: 'item-2'
    }
  ];

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider breakpoint="md" collapsedWidth="0">
          <div className="logo" />

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
          />
        </Sider>

        <Layout>
          <Header className={{ height: 500 }}>Header</Header>
          <Content className={{ height: 500 }}>
            <Outlet />
          </Content>
          <Footer>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
