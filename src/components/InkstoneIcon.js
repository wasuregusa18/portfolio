import Icon from "@ant-design/icons";
import getStyleObjectFromString from "../helper/str2obj";

//edit the path to get the desired effect
// orginally all the lines were #414042
// and the background was "fill:#ffffff;fill-opacity:1;
const InkstoneSvgNoBG = () => (
  <svg viewBox="0 0 80 80" height="80" width="80" id="svg2" version="1.1">
    <defs id="defs6" />
    <g transform="matrix(1.3333333,0,0,-1.3333333,0,80)" id="g10">
      <g transform="scale(0.1)" id="g12">
        <path
          id="path14"
          style={getStyleObjectFromString(
            "fill:rgba(255, 255, 255, 0.3);fill-rule:nonzero;stroke:none"
          )}
          d="M 600,0 H 0 V 600 H 600 V 0"
        />
        <path
          id="path16"
          style={getStyleObjectFromString(
            "fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
          )}
          d="M 355,165 H 165 v 270 h 190 z"
        />
        <path
          id="path18"
          style={getStyleObjectFromString(
            "fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
          )}
          d="M 315,185 H 205 c -11.047,0 -20,8.953 -20,20 v 170 c 0,11.047 8.953,20 20,20 h 110 c 11.047,0 20,-8.953 20,-20 V 205 c 0,-11.047 -8.953,-20 -20,-20 z"
        />
        <path
          id="path20"
          style={getStyleObjectFromString(
            "fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
          )}
          d="M 205,355 H 315"
        />
        <path
          id="path22"
          style={getStyleObjectFromString(
            "fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
          )}
          d="m 385,375 v 15 c 0,9.871 2.922,19.383 8.398,27.598 L 405,435 416.602,417.598 C 422.078,409.383 425,399.871 425,390 v -15"
        />
        <path
          id="path24"
          style={getStyleObjectFromString(
            "fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
          )}
          d="M 435,375 H 375"
        />
        <path
          id="path26"
          style={getStyleObjectFromString(
            "fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
          )}
          d="m 415,165 h -20 l -10,160 v 50 h 40 v -50 z"
        />
        <path
          id="path28"
          style={getStyleObjectFromString(
            "fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
          )}
          d="m 385,325 h 40"
        />
      </g>
    </g>
  </svg>
);

const InkstoneIcon = (props) => <Icon component={InkstoneSvgNoBG} {...props} />;
export default InkstoneIcon;
