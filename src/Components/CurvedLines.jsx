import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CurvedLines.css";

gsap.registerPlugin(ScrollTrigger);

const CurvedLines = ({ showLeft, showRight }) => {
  useEffect(() => {
    // Animate right SVG paths
    gsap.utils
      .toArray(".rainbow-right .rainbow-path")
      .forEach((path, index) => {
        const dashArrays = [
          809.204, 730.653, 652.102, 573.551, 809.204, 730.653, 652.102,
          573.551,
        ];
        const totalLength = dashArrays[index];
        gsap.set(path, { strokeDasharray: `${totalLength}, 0.1` });
        gsap.to(path, {
          scrollTrigger: {
            trigger: ".curved-lines",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          strokeDasharray: `0, ${totalLength}`,
          ease: "none",
        });
      });

    // Animate left SVG paths
    gsap.utils.toArray(".rainbow-left .rainbow-path").forEach((path, index) => {
      const dashArrays = [
        809.204, 730.653, 652.102, 573.551, 809.204, 730.653, 652.102, 573.551,
      ];
      const totalLength = dashArrays[index];
      gsap.set(path, { strokeDasharray: `${totalLength}, 0.1` });
      gsap.to(path, {
        scrollTrigger: {
          trigger: ".curved-lines",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        strokeDasharray: `0, ${totalLength}`,
        ease: "none",
      });
    });
  }, []);

  return (
    <div className="curved-lines">
      {/* Right SVG */}
      {showRight && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20%"
          viewBox="0 0 321 626"
          fill="none"
          className="rainbow-right"
        >
          <path
            className="rainbow-path"
            d="M26 0V400C26 510.457 115.543 600 226 600H321"
            stroke="#121212"
            strokeWidth="52"
          />
          <path
            className="rainbow-path"
            d="M76 0V400C76 482.843 143.157 550 226 550H321"
            stroke="#121212"
            strokeWidth="52"
          />
          <path
            className="rainbow-path"
            d="M126 0V400C126 455.228 170.772 500 226 500H321"
            stroke="#121212"
            strokeWidth="52"
          />
          <path
            className="rainbow-path"
            d="M176 0V400C176 427.614 198.386 450 226 450H321"
            stroke="#121212"
            strokeWidth="52"
          />
          <path
            className="rainbow-path"
            d="M26 0V400C26 510.457 115.543 600 226 600H321"
            stroke="#F489A3"
            strokeWidth="48"
          />
          <path
            className="rainbow-path"
            d="M76 0V400C76 482.843 143.157 550 226 550H321"
            stroke="#F0BB0D"
            strokeWidth="48"
          />
          <path
            className="rainbow-path"
            d="M126 0V400C126 455.228 170.772 500 226 500H321"
            stroke="#F3A20F"
            strokeWidth="48"
          />
          <path
            className="rainbow-path"
            d="M176 0V400C176 427.614 198.386 450 226 450H321"
            stroke="#F97028"
            strokeWidth="48"
          />
        </svg>
      )}
      {/* Left SVG (mirrored) */}
      {showLeft && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20%"
          viewBox="0 0 321 626"
          fill="none"
          className="rainbow-left"
        >
          <path
            d="M26 0V400C26 510.457 115.543 600 226 600H321"
            stroke="#121212"
            stroke-width="52"
            className="rainbow-path"
          ></path>
          <path
            d="M76 0V400C76 482.843 143.157 550 226 550H321"
            stroke="#121212"
            stroke-width="52"
            className="rainbow-path"
          ></path>
          <path
            d="M126 0V400C126 455.228 170.772 500 226 500H321"
            stroke="#121212"
            stroke-width="52"
            className="rainbow-path"
          ></path>
          <path
            d="M176 0V400C176 427.614 198.386 450 226 450H321"
            stroke="#121212"
            stroke-width="52"
            className="rainbow-path"
          ></path>
          <path
            d="M26 0V400C26 510.457 115.543 600 226 600H321"
            stroke="#F489A3"
            stroke-width="48"
            className="rainbow-path"
          ></path>
          <path
            d="M76 0V400C76 482.843 143.157 550 226 550H321"
            stroke="#F0BB0D"
            stroke-width="48"
            className="rainbow-path"
          ></path>
          <path
            d="M126 0V400C126 455.228 170.772 500 226 500H321"
            stroke="#F3A20F"
            stroke-width="48"
            className="rainbow-path"
          ></path>
          <path
            d="M176 0V400C176 427.614 198.386 450 226 450H321"
            stroke="#F97028"
            stroke-width="48"
            className="rainbow-path"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default CurvedLines;
