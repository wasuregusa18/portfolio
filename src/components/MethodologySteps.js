import React, { useEffect, useState, useCallback, useRef } from "react";
import { Steps } from "antd";

const { Step } = Steps;

const MethodologySteps = ({
  methArray,
  isVisible = false,
  direction = "vertical",
}) => {
  const [currentStep, setStep] = useState(0);

  useEffect(() => {
    //reset when slide not visible
    if (!isVisible) {
      setStep(0);
    } else {
      const moveNextStep = (count = 0) => {
        if (count < methArray.length) {
          setStep((preVal) => ++preVal);
          setTimeout(() => moveNextStep(++count), 1000);
        }
      };
      moveNextStep();
    }
  }, [isVisible, methArray.length]);

  return (
    <Steps progressDot current={currentStep} direction={direction}>
      {methArray.map((item) => (
        <Step title={item} />
      ))}
    </Steps>
  );
};

export default MethodologySteps;
