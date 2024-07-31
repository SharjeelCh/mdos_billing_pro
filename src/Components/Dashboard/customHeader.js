import { Avatar, Flex, Typography } from "antd";
import { MessageOutlined, UserOutlined } from "@ant-design/icons";

import React from "react";

const CustomHeader = () => {
  return (
    <Flex align="center" justify="space-between">
      <></>
      <Typography.Title level={4} type="secondary">
        Welcome Back,User
      </Typography.Title>
      <Flex align="flex-end">
        <Avatar icon={<UserOutlined />} size="large" />
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
