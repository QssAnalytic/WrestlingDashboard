import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// Add line component to common file at src (src/common/line-bar)
// And use it in where you want. (decisions, metrics, summary)

const LineBar = ({ percent }) => {
  const progressBarRef = useRef();

  useEffect(() => {
    const width = 240;

    const svg = d3
      .select(progressBarRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", 8)
      .style("background-color", "#2B2D33")
      .style("border-radius", "10px");

    // Gradient tanımlama
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", "bar-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%");

    gradient.append("stop").attr("offset", "0%").style("stop-color", "#D05834");

    gradient.append("stop").attr("offset", "100%").style("stop-color", "#E5B453");

    const progress = svg
      .append("rect")
      .attr("width", 0)
      .attr("height", 7)
      .attr("fill", "url(#bar-gradient)") // Gradienti uygula
      .style("opacity", 0.8)
      .style("border-radius", "10px")
      .attr("rx", 5)
      .attr("ry", 5);

    progress
      .transition()
      .duration(1000)
      .attr("width", percent ? percent * width : 0);

    return () => {
      svg.remove();
    };
  }, [percent]);

  return <div ref={progressBarRef}></div>;
};

export default LineBar;
