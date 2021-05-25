import React, { useRef } from "react";
import { Row, Col } from "antd";

import TypedCode from "./TypedCode";
import "./NotFound.css";

const codeToDisplay = `# Page Not Found
raise ValueError`;

// const codeToDisplay2 = `#404
// if page is not_found:
//     raise NameError`;

const NotFound = () => {
  const interrupt = useRef(false);
  return (
    <div id="NotFound">
      <Row style={{ height: "50px" }}></Row>
      <Row className="code-row" justify="center" align="top">
        <Col>
          <TypedCode
            code={codeToDisplay}
            language="python"
            interrupt={interrupt}
          />
        </Col>
      </Row>
    </div>
  );
};

export default NotFound;
