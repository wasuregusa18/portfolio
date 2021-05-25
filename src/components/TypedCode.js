import React, { useState, useEffect, useRef } from "react";

import Code from "./Code";
import "./TypedCode.css";

//interrupt should be a ref
//onFinish will get sent a true value when code is finished typing
const TypedCode = ({ onFinish, code, language, interrupt }) => {
  const [text, setText] = useState("");
  let timeoutRef = useRef();

  useEffect(() => {
    function slowlyType(index = 0, time = 50) {
      if (interrupt.current || index === code.length) {
        setText(code);
        if (onFinish) onFinish(true);
      } else {
        timeoutRef.current = setTimeout(() => {
          setText((preVal) => `${preVal}${code[index]}`);
          slowlyType(index + 1);
        }, time);
      }
    }
    slowlyType();
    return () => {
      clearTimeout(timeoutRef.current);
      if (interrupt.current) interrupt.current = true;
      if (onFinish) onFinish(true);
    };
  }, [onFinish, code, interrupt]);
  return (
    <div className="typed-code">
      <Code code={text} language={language} />
    </div>
  );
};

export default TypedCode;
