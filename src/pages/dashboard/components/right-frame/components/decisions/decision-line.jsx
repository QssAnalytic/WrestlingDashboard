import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { data } from "autoprefixer";

const WinLineBar = ({ percent, colors }) => {
  const progressBarRef = useRef();

  useEffect(() => {
    const width = 300;

    const svg = d3
      .select(progressBarRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", 8)
      .style("background-color", `${colors?.bgColor}`)
      .style("border-radius", "10px");

    //   svg.selectAll('*').remove();

    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "win_bar-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");

    // console.log(
    //   "gradient ente",
    //   gradient.enter().append("stop").attr("offset", (d)=>{
    //     console.log('d',d)
    //   } ).style("stop-color", ''),
    // );

    // gradient.append("stop").attr("offset", "0%").style("stop-color", `${colors?.stopColor[0]}`);
    gradient
      .selectAll("stop")
      .data(colors.stopColor)
      .join(
        (enter) => {
          return enter.append("stop").attr("offset", "0%").style("stop-color", `${colors?.stopColor[0]}`);
        },
        (update) => {
          return update.style("stop-color", `${colors?.stopColor[0]}`);
        },
      );
    gradient
      .selectAll("stop")
      .data(colors.stopColor)
      .join(
        (enter) => {
          return enter.append("stop").attr("offset", "100%").style("stop-color", `${colors?.stopColor[1]}`);
        },
        (update) => {
          console.log("update 2", update);
          return update.style("stop-color", `${colors?.stopColor[1]}`);
        },
      );

    // gradient.append("stop").attr("offset", "100%").style("stop-color", `${colors?.stopColor[1]}`);

    const progress = svg
      .append("rect")
      .attr("width", 0)
      .attr("height", 7)
      .attr("fill", "url(#win_bar-gradient)")
      .style("opacity", 0.8)
      .style("border-radius", "10px")
      .attr("rx", 5)
      .attr("ry", 5);

    progress
      .transition()
      .duration(1000)
      .attr("width", percent * (width / 10));

      svg.exit().remove();


    return () => {
        // svg.remove();
    };
  }, [percent, colors.stopColor]);

  return <div ref={progressBarRef}></div>;
};

export default WinLineBar;
