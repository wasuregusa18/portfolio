import React, { useState, useRef } from "react";
import { Row, Col, Typography } from "antd";
import Animate from "rc-animate";

import TypedCode from "./TypedCode";
import DownloadIcons from "./DownloadIcons";
import Code from "./Code";
import Quill from "./Quill";
import "./About.css";
const { Title } = Typography;

const codeName = `<ChristopherHuber />`;
const codeToType = `let Christopher;
Christopher =
  [
      "Coder", 
      "Poet", 
      "Thinker", 
      "Translator", 
      "Learner", 
      "Strategist"
    ] && seekingEmployment;`;

const About = () => {
  const [finished, setFinished] = useState(false);
  const interrupt = useRef(false);

  return (
    <section
      id="about"
      onDoubleClick={() => {
        interrupt.current = true;
        setFinished(true);
      }}
    >
      <Row style={{ height: "50px" }}></Row>
      <Row justify="center" className="top-row">
        <Col push={3} span={18}>
          <Title level={2}>
            <Code code={codeName} language="jsx" />
          </Title>
        </Col>
        <Col pull={2} span={6}>
          <Quill toHighlight={finished} />
        </Col>
      </Row>
      <Row className="code-row" justify="center" align="top">
        <Col pull={3}>
          <TypedCode
            onFinish={setFinished}
            code={codeToType}
            language="js"
            interrupt={interrupt}
          />
        </Col>
      </Row>

      <Animate transitionAppear transitionName="fade">
        {finished && (
          <Row justify="center">
            <Col>
              <DownloadIcons />
            </Col>
          </Row>
        )}
      </Animate>
    </section>
  );
};

export default About;
