import React, { useState } from "react";
import { Button, Tooltip } from "antd";
import { useHistory } from "react-router-dom";
import {
  DownSquareTwoTone,
  UpSquareTwoTone,
  MobileOutlined,
} from "@ant-design/icons";
import { Fade } from "@material-ui/core";

const iconProps = { twoToneColor: "#0000", id: "next-page-icon" };
const standardViews = ["home", "about", "skills", "projects"];
const delayTime = {
  home: "4500ms",
  about: "11000ms",
  skills: "1000ms",
  projects: "1000ms",
};

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

  const button = (
    <Button
      className="next-page"
      type="default"
      onClick={nextPage}
      icon={whichData.icon}
    />
  );
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
            <Tooltip title={capitalize(whichData.text)} placement="bottom">
              {button}
            </Tooltip>
          ) : (
            button
          )}
        </p>
      </Fade>
    </>
  );
};

export default NextPage;
