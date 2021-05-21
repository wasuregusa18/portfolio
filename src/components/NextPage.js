import React, { useState } from "react";
import { Fade } from "@material-ui/core";
import { Button, Tooltip } from "antd";
import {
  DownSquareTwoTone,
  UpSquareTwoTone,
  MobileOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const standardViews = ["home", "about", "skills", "projects"];
const delayTime = {
  home: "500ms",
  about: "5000ms",
  skills: "500ms",
  projects: "500ms",
};
const iconProps = { twoToneColor: "#0000", id: "next-page-icon" };

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const NextPage = ({
  menuSelected,
  setSelected,
  setModalVisible,
  modalVisible,
}) => {
  const history = useHistory();
  //can use ref because modal exit will change menu selected (so will get rerendered)
  const [contactSeen, setSeen] = useState(false);

  const currentPage =
    standardViews.indexOf(menuSelected[0]) > -1 ? menuSelected[0] : undefined;

  const newView =
    standardViews[
      (standardViews.indexOf(currentPage) + 1) % standardViews.length
    ];

  // if not last page - down; if last page but contact not seen contact; else up
  const isLastPage = currentPage === standardViews[standardViews.length - 1];
  const whichData = !isLastPage
    ? { icon: <DownSquareTwoTone {...iconProps} />, text: newView }
    : contactSeen
    ? { icon: <UpSquareTwoTone {...iconProps} />, text: newView }
    : { icon: <MobileOutlined {...iconProps} />, text: "Contact" };

  const nextPage = () => {
    if (newView === "home" && !contactSeen) {
      setModalVisible(true);
      setTimeout(() => setSeen(true), 500);
    } else {
      setSelected([newView]);
      history.push(newView);
    }
  };
  if (!currentPage) return null;
  return (
    <>
      <Fade
        in={true}
        style={{ transitionDelay: delayTime[currentPage] }}
        timeout={1000}
      >
        <p style={{ textAlign: "right" }}>
          {!modalVisible ? (
            <Tooltip
              // visible={!modalVisible}
              title={capitalize(whichData.text)}
              placement="bottom"
            >
              <Button
                //   key={contactSeen ? 0 : 1}
                className="next-page"
                type="default"
                onClick={nextPage}
                icon={whichData.icon}
              />
            </Tooltip>
          ) : (
            <Button
              //   key={contactSeen ? 0 : 1}
              className="next-page"
              type="default"
              onClick={nextPage}
              icon={whichData.icon}
            />
          )}
        </p>
      </Fade>
    </>
  );
};

export default NextPage;
