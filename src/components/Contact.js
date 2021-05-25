import React from "react";
import { Modal, Row, Col, Typography } from "antd";
import { MailFilled, GithubFilled, LinkedinFilled } from "@ant-design/icons";

const { Text } = Typography;

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
    link: "https://github.com/wasuregusa18",
    target: "_blank",
  },
  linkedin: {
    icon: (props) => <LinkedinFilled style={{ color: "#0077b5" }} {...props} />,
    tooltip: "LinkedIn",
    link: "https://www.linkedin.com/in/christopher-huber-3681637b/",
    target: "_blank",
  },
};

function ContactIcon(props) {
  const variant = variants[props.variant];
  return (
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
  );
}

const Contact = ({ isModalVisible, handleModalExit }) => {
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
        {icons.map((i, index) => (
          <Col key={index}>
            <ContactIcon variant={i} />
          </Col>
        ))}
      </Row>
    </Modal>
  );
};

export default Contact;
