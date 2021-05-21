import React from "react";
import SlideMedia from "./SlideMedia";
import TechList from "./TechList";
import MethodologySteps from "./MethodologySteps";
import {
  CompassOutlined,
  DatabaseOutlined,
  AimOutlined,
  BarsOutlined,
  ControlOutlined,
  DeliveredProcedureOutlined,
  NodeIndexOutlined,
} from "@ant-design/icons";
import "./ProjectSlide.css";

import { Collapse, Layout, Row, Col, List, Tag, Typography, Steps } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;
const { Title, Text, Paragraph } = Typography;

const { CheckableTag } = Tag;

const { Step } = Steps;

const ProjectSlide = ({ project }) => {
  return (
    <div style={contentStyle}>
      <Title level={3}>{project.name}</Title>
      <Collapse defaultActiveKey={["objective"]} ghost>
        <Panel showArrow={false} header="Objective" key="objective">
          <Title level={3}>{project.objective}</Title>
        </Panel>
        <Panel header="Implementation" key="implementation">
          <Text>{project.implementation}</Text>
        </Panel>
        <Panel header="Methodology" key="methodology">
          <h3>{project.methodology}</h3>
        </Panel>
        <Panel>{project.media && <SlideMedia media={project.media} />}</Panel>
      </Collapse>
    </div>
  );
};

const ProjectSlide2 = ({ project }) => {
  return (
    <Layout
      className="project-slide"
      style={{ height: "70.1vh", textAlign: "left" }}
    >
      <Header className="layout-header">
        <h3>{project.name}</h3>
      </Header>
      <Content className="layout-content">
        <div style={{ height: "100%", margin: "0 40px", color: "black" }}>
          <h3
            style={{
              height: "20%",
              lineHeight: "24px",
              marginBottom: 0,
              paddingTop: "10px",
            }}
          >
            {project.objective}
          </h3>
          <Row style={{ height: "80%" }}>
            <Col span={project.media ? 12 : 24} style={{ height: "100%" }}>
              <Collapse accordion defaultActiveKey="implementation" ghost>
                <Panel header="Implementation" key="implementation">
                  <Text>{project.implementation}</Text>
                </Panel>
                <Panel header="Methodology" key="methodology">
                  <Text>{project.methodology}</Text>
                </Panel>
              </Collapse>
            </Col>

            {project.media ? (
              <Col span={12} style={{ height: "100%" }}>
                <SlideMedia media={project.media} />
              </Col>
            ) : null}
          </Row>
          <List
            grid={{
              gutter: 1,
              xs: 1,
              sm: 4,
              md: project.tech.length,
              lg: project.tech.length,
              xl: project.tech.length,
            }}
            dataSource={project.tech}
            renderItem={(item) => (
              <List.Item>
                <CheckableTag color="#2db7f5">{"#" + item}</CheckableTag>
              </List.Item>
            )}
          />
        </div>
      </Content>
      <Footer className="layout-footer"></Footer>
    </Layout>
  );
};

const ProjectSlideImage = ({ project, isVisible }) => {
  const {
    name,
    objective,
    implementation,
    methodology,
    media,
    tech,
    grouping,
  } = project;
  let methArray = methodology.split("\n");
  methArray = methArray.map((line) => capitalize(line));
  return (
    <Layout
      className="project-slide"
      style={{ height: "70.1vh", textAlign: "left" }}
    >
      <Header className="layout-header">
        <h3>
          {iconLookup[grouping]} {project.name}
        </h3>
      </Header>
      <Content className="layout-content">
        <div style={{ height: "100%", margin: "0 40px", color: "black" }}>
          <h3
            style={{
              height: "20%",
              lineHeight: "24px",
              marginBottom: 0,
              paddingTop: "10px",
            }}
          >
            {project.objective}
          </h3>
          <Row style={{ height: "80%" }}>
            <Col span={project.media ? 12 : 24} style={{ height: "100%" }}>
              <Paragraph>{project.implementation}</Paragraph>
              <MethodologySteps
                methArray={methArray}
                isVisible={isVisible}
                direction="horizontal"
              />
            </Col>

            {project.media ? (
              <Col span={12} style={{ height: "100%" }}>
                <SlideMedia media={project.media} />
              </Col>
            ) : null}
          </Row>
          <TechList tech={tech} />
        </div>
      </Content>
      <Footer className="layout-footer"></Footer>
    </Layout>
  );
};
