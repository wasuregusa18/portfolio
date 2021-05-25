import React, { useState, useRef } from "react";
import { Carousel } from "antd";
import { useIdleTimer } from "react-idle-timer";

import ProjectSlide from "./ProjectSlide";
import ProjectData from "../data/projectData.json";
import "./Projects.css";

const Projects = (props) => {
  const intervalTimer = useRef();
  useIdleTimer({
    timeout: 1000 * 60,
    onIdle: () => {
      if (slider.current)
        intervalTimer.current = setInterval(() => slider.current.next(), 5000);
    },
    onActive: () => {
      if (intervalTimer.current) clearInterval(intervalTimer.current);
    },
    debounce: 500,
  });

  // note this is not controlled - it is updated on change and then passed down to slides
  const [currentSlide, setSlide] = useState(props.carouselShowing);
  const slider = useRef();
  return (
    <div>
      <Carousel
        dotPosition="left"
        initialSlide={props.carouselShowing}
        autoplay={false}
        ref={(ref) => {
          slider.current = ref;
        }}
        afterChange={() =>
          setSlide(slider.current.innerSlider.state.currentSlide)
        }
      >
        {ProjectData.map((project, index) => (
          <ProjectSlide
            key={index}
            isVisible={currentSlide === index}
            project={project}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
