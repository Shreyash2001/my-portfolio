import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./StraightLines.css";

gsap.registerPlugin(ScrollTrigger);

const StraightLines = () => {
  useEffect(() => {
    // Animate straight SVG paths
    gsap.utils
      .toArray(".rainbow-vertical .rainbow-path")
      .forEach((path, index) => {
        const dashArrays = [
          208.282, 132.187, 49.3416, 0, 0, 0, 0, 0, 0, 208.282, 132.187,
          49.3416, 0, 0, 0, 0, 0, 0,
        ];
        const totalLength = dashArrays[index];
        gsap.set(path, { strokeDasharray: `${totalLength}, 999999` });
        gsap.to(path, {
          scrollTrigger: {
            trigger: ".rainbow-vertical",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
          strokeDasharray: `0, ${totalLength + 999999}`,
          ease: "none",
        });
      });
  }, []);

  return (
    <div className="straight-lines">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 452 600"
        fill="none"
        preserveAspectRatio="none"
        className="rainbow-vertical"
      >
        <path
          d="M426 0V600"
          stroke="black"
          strokeWidth="52"
          className="rainbow-path"
        />
        <path
          d="M376 0V600"
          stroke="black"
          strokeWidth="52"
          className="rainbow-path"
        />
        <path
          d="M326 0V600"
          stroke="black"
          strokeWidth="52"
          className="rainbow-path"
        />
        <path
          d="M276 0V600"
          stroke="black"
          strokeWidth="52"
          className="rainbow-path"
        />
        <path
          d="M226 0V600"
          stroke="black"
          strokeWidth="52"
          className="rainbow-path"
        />
        <path
          d="M176 0V600"
          stroke="black"
          strokeWidth="52"
          className="rainbow-path"
        />
        <path
          d="M126 0V600"
          stroke="black"
          strokeWidth="52"
          className="rainbow-path"
        />
        <path
          d="M76 0V600"
          stroke="black"
          strokeWidth="52"
          className="rainbow-path"
        />
        <path
          d="M26 0V600"
          stroke="black"
          strokeWidth="52"
          className="rainbow-path"
        />
        <path
          d="M426 0V600"
          stroke="#F97028"
          strokeWidth="48"
          className="rainbow-path"
        />
        <path
          d="M376 0V600"
          stroke="#F489A3"
          strokeWidth="48"
          className="rainbow-path"
        />
        <path
          d="M326 0V600"
          stroke="#F0BB0D"
          strokeWidth="48"
          className="rainbow-path"
        />
        <path
          d="M276 0V600"
          stroke="#F3A20F"
          strokeWidth="48"
          className="rainbow-path"
        />
        <path
          d="M226 0V600"
          stroke="#F97028"
          strokeWidth="48"
          className="rainbow-path"
        />
        <path
          d="M176 0V600"
          stroke="#F489A3"
          strokeWidth="48"
          className="rainbow-path"
        />
        <path
          d="M126 0V600"
          stroke="#F0BB0D"
          strokeWidth="48"
          className="rainbow-path"
        />
        <path
          d="M76 0V600"
          stroke="#F3A20F"
          strokeWidth="48"
          className="rainbow-path"
        />
        <path
          d="M26 0V600"
          stroke="#F97028"
          strokeWidth="48"
          className="rainbow-path"
        />
      </svg>
    </div>
  );
};

export default StraightLines;
