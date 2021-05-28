import React from "react";
import { Image } from "antd";

const isImageFile = (filename) => {
  const isImage = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(filename);
  const isVideo = /\.(mp4|mov|wmv|avi)$/i.test(filename);
  if (isImage) return true;
  else if (isVideo) return false;
  else throw new Error("filename neither image nor video");
};

const style = {
  margin: "auto",
};

// media should be an array of image files or video files
// need to be in public folder for src to work
const SlideMedia = ({ media }) => {
  // let mediaArray = media.split("-");
  let mediaArray = [media]; //only using one currently
  const content = (props) =>
    mediaArray.map((filename, index) => {
      if (isImageFile(filename))
        return (
          <Image
            {...props}
            key={index}
            className="slide-image"
            src={`${filename}`}
            alt="ProjectImage"
          />
        );
      else
        return (
          <video
            {...props}
            controls
            key={index}
            className="slide-video"
            src={`${filename}`}
            alt="ProjectVideo"
          />
        );
    });
  return (
    <div className="media-container">
      {content({ style: style })}
      {/* {media.length > 1 ? (
        <Carousel style={style} autoplay dots={false}>
          {content({ style: style })}
        </Carousel>
      ) : (
        content({ style: style })
      )} */}
    </div>
  );
};

export default SlideMedia;
