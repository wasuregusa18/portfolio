import React, { useState } from "react";
import { List, Tag } from "antd";
import { useHistory } from "react-router-dom";

import ArrayKey, { keyData } from "./ArrayKey";
import "./ProjectsArray.css";

import project2grouping from "../data/project2grouping.json";
import project2index from "../data/project2index.json";

const { CheckableTag } = Tag;
const data = Object.keys(project2grouping);

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
            key={item}
          >
            <CheckableTag className="project" onClick={handleClick}>
              {keyData[project2grouping[item]](iconClass)} {item}
            </CheckableTag>
          </List.Item>
        )}
      />
      <ArrayKey keysHovered={keysHovered} setKeysHovered={setKeysHovered} />
    </>
  );
};

export default ProjectArray;
