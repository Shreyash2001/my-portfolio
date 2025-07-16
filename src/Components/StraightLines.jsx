import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./StraightLines.css";

gsap.registerPlugin(ScrollTrigger);

const StraightLines = () => {
  useEffect(() => {
    // Select all paths to animate
    const paths = gsap.utils.toArray(".ranbow-vertical__1-svg .rainbow-path");

    paths.forEach((path) => {
      const totalLength = path.getTotalLength(); // Get the actual length of the path

      // Set the initial state: path is fully "dashed" but offset out of view
      gsap.set(path, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });

      // Animate the path into view on scroll
      gsap.to(path, {
        strokeDashoffset: 0, // Animate the offset to 0 to "draw" the line
        ease: "none", // Linear easing for a direct link to scroll speed
        scrollTrigger: {
          trigger: ".ranbow-vertical__1-svg",
          start: "top bottom", // Start when the SVG's top enters the viewport's bottom
          end: "bottom center", // End when the SVG's bottom reaches the viewport's center
          scrub: true, // Make the animation follow the scrollbar
        },
      });
    });

    // It's a good practice to refresh ScrollTrigger after setup
    // in case of layout shifts after the component mounts.
    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    // Cleanup function to kill triggers and clear timeouts when the component unmounts
    return () => {
      clearTimeout(refreshTimeout);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="straight-lines">
      {/* The SVG structure remains the same */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 452 600"
        fill="none"
        preserveAspectRatio="none"
        className="ranbow-vertical__1-svg"
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
