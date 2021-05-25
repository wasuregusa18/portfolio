import React from "react";
import { Tag, List } from "antd";
import { CompassOutlined, DatabaseOutlined } from "@ant-design/icons";

import "./ArrayKey.css";

const keyData = {
  "Data Collection & Analysis": (clss) => (
    <DatabaseOutlined className={"data-sci " + clss} />
  ),
  "Web Development": (clss) => (
    <CompassOutlined className={"web-dev " + clss} />
  ),
};

const ArrayKey = (props) => {
  const iconClass = props.keysHovered ? "hovered-keys" : null;
  console.log(iconClass, props.keysHovered);
  return (
    <List
      className="key-array"
      grid={{
        gutter: 16,
        xs: 2,
      }}
      dataSource={Object.entries(keyData)}
      renderItem={([tag, icon]) => (
        <List.Item
          onMouseOver={() => props.setKeysHovered(true)}
          onMouseOut={() => props.setKeysHovered(false)}
          key={tag}
        >
          <Tag className="key">
            {icon(iconClass)} = {tag}
          </Tag>
        </List.Item>
      )}
    />
  );
};

export default ArrayKey;
export { keyData };
