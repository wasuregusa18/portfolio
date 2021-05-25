import React from "react";
import { Row, Col, Button, Tooltip } from "antd";
import {
  LaptopOutlined,
  CameraOutlined,
  CodeOutlined,
} from "@ant-design/icons";

const LinkArray = ({ media, link, source }) => {
  function shouldShow(x) {
    switch (x) {
      case "ND":
        return [false, "Non-Disclosure"];
      case "UD":
        return [false, "Under Development"];
      case null:
        return [false, ""];
      case undefined:
        return [false, ""];
      default:
        return [true, ""];
    }
  }

  const icons = [<CameraOutlined />, <LaptopOutlined />, <CodeOutlined />];
  const links = [media, link, source];
  const text = ["Media", "Link", "Source"];
  //   media needs different treatment

  return (
    <Row justify="space-around" gutter={12} style={{ fontSize: "x-large" }}>
      {links.slice(1).map((l, i) => {
        console.log(l);
        let [toShow, title] = shouldShow(l);
        console.log(toShow, title);
        const button = (
          <Button
            href={l}
            target="_blank"
            type="link"
            disabled={!toShow}
            icon={icons[i + 1]}
          >
            {text[i + 1]}
          </Button>
        );
        return (
          <Col>
            {!toShow && l ? (
              <Tooltip title={title} placement="bottom">
                <span>{button}</span>
              </Tooltip>
            ) : (
              button
            )}
          </Col>
        );
      })}
    </Row>
  );
};

export default LinkArray;
