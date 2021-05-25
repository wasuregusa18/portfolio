import React from "react";
import { List, Tag } from "antd";

import "./TechList.css";

const { CheckableTag } = Tag;

const TechList = ({ tech }) => (
  <List
    grid={{
      xs: 1,
      sm: 4,
      md: 6,
      lg: tech.length,
      xl: tech.length,
    }}
    dataSource={tech}
    renderItem={(item) => (
      <List.Item style={{ width: "fit-content" }}>
        <CheckableTag color="#2db7f5">{"#" + item}</CheckableTag>
      </List.Item>
    )}
  />
);

export default TechList;
