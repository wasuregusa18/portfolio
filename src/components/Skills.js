import React, { useState } from "react";
import tableData from "../data/tableData.json";
import { Tag, Table } from "antd";
import entry2related from "../data/entry2related.json";
import ProjectArray from "./ProjectsArray";
import "./Skills.css";
const { CheckableTag } = Tag;

// should turn trableData in a function - so that it can use what is being highlighted?

const SkillsTable = (props) => {
  const [isHighlighted, setHighlighted] = useState([]);

  const handleHover = (project) => {
    console.log(project);
    console.log(entry2related[project]);
    entry2related[project]
      ? setHighlighted(entry2related[project])
      : setHighlighted([]);
  };

  const columns = [
    {
      title: "Domain",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Technologies",
      dataIndex: "tech",
      key: "tech",
      render: (tags) =>
        tags.map((tag) => (
          <CheckableTag
            className="tableEntry"
            checked={isHighlighted.indexOf(tag) > -1}
            key={tag}
          >
            {tag.toUpperCase()}
          </CheckableTag>
        )),
    },
  ];

  return (
    <section id="skills">
      <ProjectArray handleHover={handleHover} {...props} />
      {/* <ArrayKey /> */}
      <Table
        className="skills-table"
        dataSource={tableData}
        columns={columns}
        pagination={false}
      />
    </section>
  );
};

export default SkillsTable;
