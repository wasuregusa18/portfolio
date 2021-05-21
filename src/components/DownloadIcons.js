import React from "react";

import { List, Tooltip, Col, Row, Button } from "antd";
import "./DownloadIcons.css";

import {
  MailOutlined,
  RadarChartOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

{
  /* <FileTextOutlined /> */
  // <SolutionOutlined />
}

const data = [
  { icon: <MailOutlined />, text: "Cover Letter" },
  { icon: <SolutionOutlined />, text: "Resume" },
];

const DownloadIcons = () => {
  return (
    <div className="download-icons">
      <Row gutter={50}>
        {data.map((item) => (
          <Col>
            <Tooltip title={item.text}>
              <a className="download-icon" download href="logo192.png">
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
