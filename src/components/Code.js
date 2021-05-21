import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx.min";
import PrismPython from "prismjs/components/prism-python.min";

import "../prism-default.css";
import "./Code.css";
// import "../prism-coy.css";

export default function Code({ code, language, sty }) {
  const codeBlock = useRef();

  useEffect(() => {
    if (codeBlock.current) {
      Prism.highlightElement(codeBlock.current);
    }
  }, [language, code]);
  return (
    <div className="code-block">
      <pre className={`language-${language}`}>
        <code ref={codeBlock} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
