import React, { useState } from "react";
import { List, Tag } from "antd";
import ArrayKey from "./ArrayKey";
import "./ProjectsArray.css";
import { CompassOutlined, DatabaseOutlined } from "@ant-design/icons";

import { useHistory } from "react-router-dom";

import projectName2techs from "../data/projectName2techs.json";
import project2grouping from "../data/project2grouping.json";
import project2index from "../data/project2index.json";

const { CheckableTag } = Tag;
const data = Object.keys(projectName2techs);

const ProjectArray = (props) => {
  const [keysHovered, setKeysHovered] = useState(false);
  const iconClass = keysHovered ? "hovered-keys" : null;

  const history = useHistory();
  const handleClick = (e) => {
    const index = project2index[e.target?.innerText?.trim()];
    props.setCarousel(index ? index : 0);
    props.setSelected(["4"]);
    history.push("/projects");
  };
  return (
    <>
      <List
        className="project-array"
        header={<div>Projects</div>}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            onMouseOver={(event) =>
              props.handleHover(event.target?.innerText?.trim())
            }
            onMouseOut={(event) => props.handleHover("")}
          >
            <CheckableTag className="project" onClick={handleClick} key={item}>
              {project2grouping[item] === "Web Development" ? (
                <CompassOutlined className={"web-dev " + iconClass} />
              ) : (
                <DatabaseOutlined className={"data-sci " + iconClass} />
              )}{" "}
              {item}
            </CheckableTag>
          </List.Item>
        )}
      />
      <ArrayKey keysHovered={keysHovered} setKeysHovered={setKeysHovered} />
    </>
  );
};

export default ProjectArray;
