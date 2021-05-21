import React from "react";
import "./Quill.css";

const hide = { display: "none" };

const Quill = ({ toHighlight = true }) => (
  <div>
    <img
      className="quill"
      style={toHighlight ? hide : null}
      src="newQuillPen.png"
      alt="quill"
    />
    <img
      className="quill"
      style={toHighlight ? null : hide}
      src="coloredQuillPen.png"
      alt="quill"
    />
  </div>
);

export default Quill;
