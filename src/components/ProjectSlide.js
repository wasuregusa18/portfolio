import React from "react";
import { Layout, Row, Col, Typography, Divider } from "antd";
import {
  CompassOutlined,
  DatabaseOutlined,
  AimOutlined,
  ControlOutlined,
  NodeIndexOutlined,
} from "@ant-design/icons";

import SlideMedia from "./SlideMedia";
import TechList from "./TechList";
import MethodologySteps from "./MethodologySteps";
import LinkArray from "./LinkArray";
import CollapsableParagraph from "./CollapsableParagraph";
import "./ProjectSlide.css";

const { Header, Content } = Layout;
const { Paragraph } = Typography;

const ellipsisSetting = {
  media: {
    rows: 2,
    expandable: true,
  },
  noMedia: { rows: 6, expandable: true },
};

const ContentImage = ({
  objective,
  implementation,
  methArray,
  isVisible,
  media,
}) => {
  return (
    <>
      <Row gutter={20}>
        <Col span={24} style={{ overflow: "hidden" }}>
          <SlideMedia media={media} />
          <h4>
            <AimOutlined /> Objective
          </h4>
          <Paragraph>{objective}</Paragraph>
          <h4>
            <NodeIndexOutlined /> Implementation
          </h4>
          <CollapsableParagraph
            text={implementation}
            settings={ellipsisSetting.media}
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ width: "95%", overflow: "hidden" }}>
          <h4 style={{ marginBottom: "20px" }}>
            <ControlOutlined /> Methodology
          </h4>
          <MethodologySteps
            methArray={methArray}
            isVisible={isVisible}
            direction="horizontal"
          />
        </Col>
      </Row>
    </>
  );
};

const ContentNoImage = ({
  objective,
  implementation,
  methArray,
  isVisible,
}) => {
  return (
    <Row gutter={20}>
      <Col span={12}>
        <h4>
          <AimOutlined /> Objective
        </h4>
        <Paragraph>{objective}</Paragraph>
        <h4>
          <NodeIndexOutlined /> Implementation
        </h4>
        <CollapsableParagraph
          text={implementation}
          settings={ellipsisSetting.noMedia}
        />
      </Col>
      <Col span={12}>
        <MethodologySteps methArray={methArray} isVisible={isVisible} />
      </Col>
    </Row>
  );
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const iconLookup = {
  "Web Development": <CompassOutlined />,
  "Data Collection & Analysis": <DatabaseOutlined />,
};

const ProjectSlideWrapper = ({ project, isVisible }) => {
  const {
    name,
    objective,
    implementation,
    methodology,
    media,
    tech,
    link,
    source,
    grouping,
  } = project;
  let methArray = methodology.split("\n");
  methArray = methArray.map((line) => capitalize(line));

  const contentProps = {
    objective: objective,
    implementation: implementation,
    methArray: methArray,
    isVisible: isVisible,
    media: media,
  };
  return (
    <Layout className="project-slide">
      <Header className="layout-header">
        <h3>
          {iconLookup[grouping]} {name}
        </h3>
      </Header>
      <Content className="layout-content">
        <div className="content-container">
          <div style={{ height: "5%" }} />
          {media ? (
            <ContentImage {...contentProps} />
          ) : (
            <ContentNoImage {...contentProps} />
          )}
          <Divider />
          <TechList tech={tech} />
          <LinkArray link={link} source={source} media={media} />
        </div>
      </Content>
    </Layout>
  );
};

export default ProjectSlideWrapper;
