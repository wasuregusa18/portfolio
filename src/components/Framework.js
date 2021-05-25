/* eslint-disable no-fallthrough */
import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  ContactsOutlined,
  DotChartOutlined,
  ProjectOutlined,
  MobileOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import Contact from "./Contact";
import useUpdateTitle from "../hooks/updateTitle";
import InkstoneIcon from "./InkstoneIcon";
import "./Framework.css";

const { Content, Footer, Sider } = Layout;
const menuItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    key: "about",
    icon: <ContactsOutlined />,
  },
  {
    key: "skills",
    icon: <DotChartOutlined />,
  },
  {
    key: "projects",
    icon: <ProjectOutlined />,
  },
  {
    key: "contact",
    icon: <MobileOutlined />,
  },
  // { key: "404", icon: <WarningOutlined /> },
];
const views = ["home", "about", "skills", "projects", "404"];
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function findCurrentPage(path) {
  if (path === "/") return "home";
  else if (views.includes(path.slice(1))) return path.slice(1);
  else return "404";
}

const Framework = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const history = useHistory();
  let currentPage = findCurrentPage(history.location.pathname);
  const titleString =
    currentPage === "home" ? "" : " - " + capitalize(currentPage);
  useUpdateTitle(`Christopher Huber${titleString}`);

  const breadcrumbData = [
    "Coders",
    "Christopher Huber",
    capitalize(currentPage),
  ];

  const handleClick = (e) => {
    if (e.key === "contact") {
      props.setModalVisible(true);
    } else {
      props.setSelected([e.key]);
      history.push(e.key);
    }
  };

  const onCollapse = (collapsed) => setCollapsed((preVal) => !preVal);

  // Header component
  //   const [headerHover, setHover] = useState(false);
  //   const suffix = headerHover ? " header-hovered" : "";
  //   const headerClasses = "site-header site-layout-background" + suffix;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <InkstoneIcon
          className="inkstone"
          style={!collapsed ? { left: "60px" } : {}}
        />
        <Menu
          theme="dark"
          selectedKeys={props.menuSelected}
          mode="inline"
          onClick={handleClick}
        >
          {menuItems.map((menuItem) => (
            <Menu.Item key={menuItem.key} icon={menuItem.icon}>
              {capitalize(menuItem.key)}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header
          className={headerClasses}
          style={{ padding: 0 }}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <Title style={{ display: "inline" }} level={4}>
            {currentPage.icon} {capitalize(currentPage.key)}
          </Title>
        </Header> */}
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumbData.map((x, index) => {
              if (x !== "Home")
                return <Breadcrumb.Item key={index}>{x}</Breadcrumb.Item>;
              else return null;
            })}
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Contact
              isModalVisible={props.modalVisible}
              handleModalExit={() => props.setModalVisible(false)}
            />
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <p>Christopher Huber ©{new Date().getFullYear()}</p>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Framework;
