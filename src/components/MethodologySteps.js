import React, { useEffect, useState, useCallback, useRef } from "react";
import { Steps } from "antd";

const { Step } = Steps;

const MethodologySteps = ({
  methArray,
  isVisible = false,
  direction = "vertical",
}) => {
  const [currentStep, setStep] = useState(0);
  //   const count = useRef(1);
  //   useEffect(() => {
  //     function animate(count = 1, time = 50000) {
  //       console.log("ticking");
  //       if (count < methArray.length) {
  //         setStep((preVal) => ++preVal);
  //         setTimeout(animate(++count), time);
  //       }
  //     }
  //     animate();
  //   }, []);

  const count = useRef(0);
  useEffect(() => {
    //reset
    if (!isVisible) {
      setStep(0);
      count.current = 0;
    } else {
      const moveNextStep = () => {
        if (count.current < methArray.length) {
          count.current++;
          setStep((preVal) => ++preVal);
          setTimeout(moveNextStep, 1000);
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
