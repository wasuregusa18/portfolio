import React, { useState } from "react";
import { Typography } from "antd";

import "./CollapsableParagraph.css";

const { Paragraph } = Typography;

const CollapsableParagraph = ({ text, settings }) => {
  const [expanded, setExpanded] = useState(false);
  const [key, setKey] = useState(0);
  let newSettings = {
    ...settings,
    onExpand: () => {
      setExpanded(true);
    },
  };
  const onClose = () => {
    setKey((preVal) => ++preVal % 2);
    setExpanded(false);
  };
  return (
    <>
      <Paragraph ellipsis={newSettings} key={key}>
        {text}
        {expanded && (
          <button className="close-expanded" onClick={onClose}>
            Close
          </button>
        )}
      </Paragraph>
    </>
  );
};

export default CollapsableParagraph;
