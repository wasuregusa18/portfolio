import React from "react";
import { Modal, Tooltip, Row, Col, Typography } from "antd";

import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const { Text } = Typography;

// import { FaGithubAlt } from "react-icons/fa'";

const variants = {
  email: {
    icon: (props) => <MailFilled style={{ color: "#8e24aa" }} {...props} />,
    tooltip: "Email",
    link: "mailto:www.wasuregusa18@gmail.com",
    target: "_self",
  },
  github: {
    icon: (props) => <GithubFilled style={{ color: "#000" }} {...props} />,
    tooltip: "Github",
    link: "https://www.github.com",
    target: "_blank",
  },
  linkedin: {
    icon: (props) => <LinkedinFilled style={{ color: "#0077b5" }} {...props} />,
    tooltip: "LinkedIn",
    link: "https://www.linkedin.com",
    target: "_blank",
  },
};

function ContactIcon(props) {
  const variant = variants[props.variant];
  return (
    // <Tooltip title={variant.tooltip} aria-label={variant.tooltip}>
    <>
      <a target={variant.target} rel="noreferrer" href={variant.link}>
        {variant["icon"]()}
      </a>
      <Text
        style={{ display: "block", textAlign: "center", fontSize: "medium" }}
      >
        {variant.tooltip}
      </Text>
    </>
    // </Tooltip>
  );
}

const Contact = ({ isModalVisible, handleModalExit }) => {
  // const handleOk = ()=> setModalVisible(false)
  const icons = ["email", "github", "linkedin"];
  return (
    <Modal
      title="Contact Me"
      visible={isModalVisible}
      footer={null}
      onCancel={handleModalExit}
    >
      <Row
        justify="space-around"
        gutter={[12, 24]}
        style={{ fontSize: "xxx-large" }}
      >
        {icons.map((i) => (
          <Col>
            <ContactIcon variant={i} />
          </Col>
        ))}
      </Row>
    </Modal>
  );
};

export default Contact;
