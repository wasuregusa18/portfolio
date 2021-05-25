import React, { useEffect, useState, useRef } from "react";
import { Steps } from "antd";

const { Step } = Steps;

const MethodologySteps = ({
  methArray,
  isVisible = false,
  direction = "vertical",
}) => {
  const [currentStep, setStep] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    //reset when slide not visible
    if (!isVisible) {
      setStep(0);
    } else {
      const moveNextStep = (count = 0) => {
        if (count < methArray.length) {
          setStep((preVal) => ++preVal);
          timeoutRef.current = setTimeout(() => moveNextStep(++count), 1000);
        }
      };
      moveNextStep();
      return () => clearTimeout(timeoutRef.current);
    }
  }, [isVisible, methArray.length]);

  return (
    <Steps progressDot current={currentStep} direction={direction}>
      {methArray.map((item, index) => (
        <Step title={item} key={index} />
      ))}
    </Steps>
  );
};

export default MethodologySteps;
