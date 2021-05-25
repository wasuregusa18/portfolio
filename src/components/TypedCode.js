import React, { useState, useEffect } from "react";

import Code from "./Code";
import "./TypedCode.css";

//interrupt should be a ref
//onFinish will get sent a true value when code is finished typing
const TypedCode = ({ onFinish, code, language, interrupt }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    function slowlyType(index = 0, time = 50) {
      if (interrupt.current || index === code.length) {
        setText(code);
        if (onFinish) onFinish(true);
      } else {
        setTimeout(() => {
          setText((preVal) => `${preVal}${code[index]}`);
          slowlyType(index + 1);
        }, time);
      }
    }
    slowlyType();
    return () => {
      if (interrupt.current) interrupt.current = true;
    };
  }, [onFinish, code, interrupt]);
  return (
    <div className="typed-code">
      <Code code={text} language={language} />
    </div>
  );
};

export default TypedCode;
