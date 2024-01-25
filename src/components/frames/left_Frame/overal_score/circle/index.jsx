import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Example from "./ProgressBar";


let percentage = 88;


const Bar = () => (
  <div style={{}}>
    <Example >
      <CircularProgressbar value={percentage} text={`${percentage}`}

        styles={{
          root: {},
          path: {
            stroke: `rgba(235, 20, 20, 1)`,

            strokeLinecap: "round",
            transition: "stroke-dashoffset 0.5s ease 0s",
            transform: "rotate(1turn)", 
            transformOrigin: "center center",
          },
          trail: {
            stroke: 'rgba(43, 45, 51, 1)',
            strokeLinecap: "butt",
            transform: "rotate(0turn)",
            transformOrigin: "center center",
          },
          text: {
            fill: "#fff",
            fontWeight: "500",
            textAlign: "center",
            fontFamily: "Inter",
            fontSize: "27.256px",
            fontStyle: "normal",
            lineHeight: "normal",

          },
          background: {
            fill: "#3e98c7",
          },
        }}
      />
    </Example>
  </div>
);

export default Bar