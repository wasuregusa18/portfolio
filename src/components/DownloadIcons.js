import React from "react";
import { Tooltip, Col, Row } from "antd";
import { MailOutlined, SolutionOutlined } from "@ant-design/icons";

import "./DownloadIcons.css";

const variants = [
  { icon: <MailOutlined />, text: "Cover Letter", path: "cover-letter.pdf" },
  { icon: <SolutionOutlined />, text: "Resume", path: "resume.pdf" },
];

const DownloadIcons = () => {
  return (
    <div className="download-icons">
      <Row gutter={50}>
        {variants.map((item, index) => (
          <Col key={index}>
            <Tooltip title={item.text}>
              <a className="download-icon" download href={item.path}>
                {item.icon}
              </a>
            </Tooltip>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DownloadIcons;
