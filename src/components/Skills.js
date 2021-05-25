import React, { useState } from "react";
import { Tag, Table } from "antd";

import ProjectArray from "./ProjectsArray";
import "./Skills.css";

import tableData from "../data/tableData.json";
import entry2related from "../data/entry2related.json";

const { CheckableTag } = Tag;

const SkillsTable = (props) => {
  const [isHighlighted, setHighlighted] = useState([]);
  const handleHover = (project) => {
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
        tags.map((tag, index) => (
          <CheckableTag
            className="tableEntry"
            checked={isHighlighted.indexOf(tag) > -1}
            key={index}
          >
            {tag.toUpperCase()}
          </CheckableTag>
        )),
    },
  ];

  return (
    <section id="skills">
      <ProjectArray handleHover={handleHover} {...props} />
      <Table
        className="skills-table"
        dataSource={tableData}
        columns={columns}
        pagination={false}
        rowKey="id"
      />
    </section>
  );
};

export default SkillsTable;
