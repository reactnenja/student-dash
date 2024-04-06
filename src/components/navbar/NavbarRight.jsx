import React from "react";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  UserAddOutlined,
  TableOutlined,
  MailOutlined,
  PieChartOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

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
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Table", "table", <TableOutlined />),
  getItem("Adding User +", "adduser", <UserAddOutlined />),
  getItem("Mail", "sub1", <MailOutlined />, [
    getItem("Inbox", "5"),
    getItem("Spam", "6"),
    getItem("Trash", "7"),
    getItem("Sent", "8"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3"),
  ]),
  getItem("Login", "login", <LoginOutlined />),
];

const NavbarRight = () => {
  return (
    <div
      style={{
        width: "256px",
        height: "100vh",
        position: "fixed",
        top: "0px",
      }}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        style={{
          height: "100%",
        }}
      >
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={`/${item.key}`}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default NavbarRight;
