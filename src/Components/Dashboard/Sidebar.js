import { Flex, Menu } from "antd";
import React from "react";
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FaLeaf } from "react-icons/fa6";

const Sidebar = ({ setSelectedMenuItem }) => {
  return (
    <>
      <Flex align="center" justify="center" className="side">
        <div className="logoo">
          <FaLeaf />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="menu-bar"
          onClick={({ key }) => setSelectedMenuItem(key)}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <CarryOutOutlined />,
              label: "My Appointments",
            },
            {
              key: "3",
              icon: <OrderedListOutlined />,
              label: "Forms",
            },
            {
              key: "4",
              icon: <SettingOutlined />,
              label: "Settings",
            },
            {
              key: "5",
              icon: <LogoutOutlined />,
              label: "Logout",
            },
          ]}
        />
      </Flex>
    </>
  );
};

export default Sidebar;
