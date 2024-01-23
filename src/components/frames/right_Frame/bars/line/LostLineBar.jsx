import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LostLineBar = ({ lostPercent }) => {
    const progressBarRef = useRef();

    useEffect(() => {
        const createProgressBar = () => {
            const width = 280;
            const height = 30;

            const svg = d3
                .select(progressBarRef.current)
                .append('svg')
                .attr('width', width)
                .attr('height', 8)
                .style('background-color', '#2B2D33')
                .style('border-radius', '10px');

            // Gradient tanımlama
            const gradient = svg.append("defs")
                .append("linearGradient")
                .attr("id", "lost_bar-gradient")
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "100%")
                .attr("y2", "0%");

            gradient.append("stop")
                .attr("offset", "0%")
                .style("stop-color", "#692C34");
            // #692C34, #DE2736
            
            gradient.append("stop")
                .attr("offset", "100%")
                .style("stop-color", "#DE2736");

            const progress = svg.append('rect')
                .attr('width', 0)
                .attr('height', 7)
                .attr('fill', 'url(#lost_bar-gradient)') // Gradienti uygula
                .style('opacity', 0.8)
                .style('border-radius', '10px')
                .attr('rx', 5)
                .attr('ry', 5);

            progress.transition()
                .duration(1000)
                .attr('width', lostPercent *  (width / 100));
        };

        createProgressBar();
    }, [lostPercent]);

    return <div ref={progressBarRef}></div>;
};

export default LostLineBar;

