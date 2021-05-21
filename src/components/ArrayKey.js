import React from "react";
import { Tag, List } from "antd";
import { CompassOutlined, DatabaseOutlined } from "@ant-design/icons";

import "./ArrayKey.css";

const data = [
  {
    icon: (clss) => <DatabaseOutlined className={"data-sci " + clss} />,
    tag: "Data Science",
  },
  {
    icon: (clss) => <CompassOutlined className={"web-dev " + clss} />,
    tag: "Web Development",
  },
];

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
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          onMouseOver={() => props.setKeysHovered(true)}
          onMouseOut={() => props.setKeysHovered(false)}
        >
          <Tag className="key" key={item.tag}>
            {item.icon(iconClass)} = {item.tag}
          </Tag>
        </List.Item>
      )}
    />
  );
};

export default ArrayKey;
