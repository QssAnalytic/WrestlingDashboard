import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = (props) => {
  const chartRef = useRef();

  useEffect(() => {
    const data = props.data;

    if (!Array.isArray(data)) {
      // Handle the case where data is not an array
      return;
    }

    const width = 340;
    const height = 150;
    const margin = { top: 5, right: 0, bottom: 40, left: 30 };

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.year))
      .range([0, 360])
      .padding(0);

    const y = d3
      .scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line()
      .x((d) => x(d.year) + x.bandwidth() / 2)
      .y((d) => y(d.score));

    const svg = d3.select(chartRef.current).append("svg").attr("width", width).attr("height", height);

    const linePath = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#ECC254")
      .attr("stroke-width", 2)
      .attr("d", line);
      

    svg
      .append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("fill", "#ECC254")
      .style("font-weight", "bold")
      .style("font-size", "12px")
      .attr("dy", "2em");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).tickValues([0, 50, 100]))
      .selectAll("text")
      .style("fill", "#ECC254")
      .style("font-weight", "bold")
      .style("font-size", "14px");

    svg
      .selectAll(".horizontal-line")
      .data([0, 50, 100])
      .enter()
      .append("line")
      .attr("class", "horizontal-line")
      .attr("x1", margin.left + 5)
      .attr("x2", width - 13)
      .attr("y1", (d) => y(d))
      .attr("y2", (d) => y(d))
      .attr("stroke", "#373A45")
      .attr("stroke-dotarray", "4")
      .attr("stroke-width", 1);

    svg.select(".domain").remove();
    svg.select(".domain").remove();
    svg.selectAll(".tick line").remove();

    return () => {
      svg.remove();
    };
  }, [props.data]);

  return <div ref={chartRef} className=""></div>;
};

export default LineChart;
