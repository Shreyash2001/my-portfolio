import React, { useEffect, useRef } from "react";
import "./Section2.css";
import ConnectButton from "../../Components/ConnectButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { gsap } from "gsap";

const FloatingImage = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const borderColor = Math.random() > 0.5 ? "#f3a20f" : "#ff4d4f";

  useEffect(() => {
    const img = imgRef.current;
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Random floating animation within container
    tl.to(img, {
      x: () => gsap.utils.random(-15, 15),
      y: () => gsap.utils.random(-15, 15),
      rotation: () => gsap.utils.random(-3, 3),
      duration: gsap.utils.random(2, 4),
      ease: "sine.inOut",
    });

    // Pause animation and scale on hover
    img.addEventListener("mouseenter", () => {
      tl.pause();
      gsap.to(img, { scale: 1.2, duration: 0.3 });
    });

    // Resume animation and reset scale on mouse leave
    img.addEventListener("mouseleave", () => {
      tl.resume();
      gsap.to(img, { scale: 1, duration: 0.3 });
    });

    return () => {
      tl.kill();
      img.removeEventListener("mouseenter", () => {});
      img.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      style={{ border: `2px solid ${borderColor}` }}
    />
  );
};

function Section2() {
  // Placeholder image URLs (replace with actual image paths)
  const images = [
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
    "https://via.placeholder.com/80",
  ];

  return (
    <div className="tech-passion-container">
      <div className="floating-images left">
        <FloatingImage
          src={images[0]}
          alt="Floating tech 1"
          className="floating-img img1"
        />
        <FloatingImage
          src={images[1]}
          alt="Floating tech 2"
          className="floating-img img2"
        />
      </div>
      <div className="content-wrapper">
        <h1 className="tech-passion-title">
          Passionate about
          <br />
          <span className="highlight-text">cutting edge technologies</span>
        </h1>
        <p className="tech-passion-description">
          I am deeply passionate about coding and software engineering,
          constantly exploring innovative solutions and pushing the boundaries
          of what's possible. My enthusiasm drives me to create efficient,
          scalable, and impactful applications that solve real-world problems.
        </p>
        <div>
          <ConnectButton
            bgColor="#fff"
            label="View my Github"
            Icon={GitHubIcon}
            iconPosition="left"
            onClick={() => {
              window.open("https://github.com/Shreyash2001", "_blank");
            }}
          />
        </div>
      </div>
      <div className="floating-images right">
        <FloatingImage
          src={images[2]}
          alt="Floating tech 3"
          className="floating-img img3"
        />
        <FloatingImage
          src={images[3]}
          alt="Floating tech 4"
          className="floating-img img4"
        />
      </div>
    </div>
  );
}

export default Section2;
