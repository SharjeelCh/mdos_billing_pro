import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import CustomHeader from "../Components/Dashboard/customHeader";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "../Styles/Appp.css";
import MainContent from "../Components/Dashboard/MainContent";
import Appointments from "../Components/Dashboard/Appointments";

const { Sider, Header, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "1":
        return <MainContent />;
      case "2":
        return <Appointments />;
    
      default:
        return <MainContent />;
    }
  };

  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar setSelectedMenuItem={setSelectedMenuItem} />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="trigger-btn"
        />
      </Sider>
      <Layout>
        <Header className="headerr">
          <CustomHeader />
        </Header>
        <Content className="content">
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
