import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Typography } from "antd";
import { Fade } from "@material-ui/core";

import Code from "./Code";
import Quill from "./Quill";
import "./Home.css";

const { Title } = Typography;

const codeToDisplay = `from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'`;

const notALanguage = "";
const codeName = `<ChristopherHuber />`;
const fadeInTime = 750;
const delays = { name: "0ms", tag: "750ms", img: "1500ms", code: "2250ms" };

const Home = () => {
  const [toHighlight, setHighlight] = useState(false);
  // const handleHover = () => setHighlight((preVal) => !preVal);
  let [finishedAnimating, setAnimate] = useState(false);
  console.log(finishedAnimating);

  // disallow hovering until animation finished - and flash hover once
  useEffect(() => {
    setTimeout(() => setAnimate(true), 5000);
    setTimeout(() => setHighlight(true), 3300);
  }, [setAnimate, setHighlight]);

  return (
    <div>
      <Row style={{ height: "50px" }}></Row>
      <div
        onMouseEnter={() => finishedAnimating && setHighlight(true)}
        onMouseLeave={() => finishedAnimating && setHighlight(false)}
        style={{
          position: "absolute",
          // margin: auto
          zIndex: 100,
          height: "200px",
          width: "100%",
        }}
      />
      <Row justify="center" className="top-row">
        <Fade in={true} timeout={fadeInTime}>
          <Col push={3} span={18}>
            <Title level={2}>
              <Code
                code={codeName}
                language={toHighlight ? "jsx" : notALanguage}
              />
            </Title>
          </Col>
        </Fade>
        <Fade
          in={true}
          style={{ transitionDelay: delays.img }}
          timeout={fadeInTime}
        >
          <Col pull={2} span={6}>
            <Quill toHighlight={toHighlight} />
          </Col>
        </Fade>
      </Row>

      <Row
        className="middle-row"
        justify="center"
        style={{ marginBottom: "30px" }}
        align="middle"
      >
        <Fade
          in={true}
          timeout={fadeInTime}
          style={{ transitionDelay: delays.tag }}
        >
          <Col>
            <Title level={3}>
              <Code
                code={`I.write("Code")`}
                language={toHighlight ? "python" : notALanguage}
              />
            </Title>
          </Col>
        </Fade>
      </Row>

      <Fade
        in={true}
        style={{ transitionDelay: delays.code }}
        timeout={fadeInTime}
        // onEntered={() => setTimeout(() => setAnimate(true), 500)}
      >
        <Row
          style={{ height: "50%" }}
          justify="space-around"
          className="bottom-row"
        >
          <Col offset={3} span={6}>
            <Code
              code={codeToDisplay}
              language={toHighlight ? "python" : notALanguage}
            />
          </Col>
          <Col span={6}></Col>
        </Row>
      </Fade>
    </div>
    // </Animate>
  );
};

export default Home;
