import React, { useEffect, useRef } from "react";
import "./Section2.css";
import ConnectButton from "../../Components/ConnectButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import { gsap } from "gsap";

const FloatingImage = ({ src, alt, className, animationPath }) => {
  const imgRef = useRef(null);
  const borderColor = Math.random() > 0.5 ? "#f3a20f" : "#ff4d4f";

  useEffect(() => {
    const img = imgRef.current;
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Controlled floating animation with predefined path
    tl.to(img, {
      x: animationPath.x,
      y: animationPath.y,
      rotation: animationPath.rotation,
      duration: animationPath.duration,
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
  }, [animationPath]);

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
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
  ];

  // Define distinct animation paths for each image to prevent overlap
  const animationPaths = [
    { x: 15, y: -20, rotation: 2, duration: 3 }, // img1 (left, top)
    { x: -20, y: 20, rotation: -3, duration: 3.5 }, // img2 (left, middle)
    { x: 20, y: 50, rotation: 3, duration: 4 }, // img3 (left, bottom)
    { x: -15, y: -20, rotation: -2, duration: 3 }, // img4 (right, top)
    { x: 20, y: 20, rotation: 3, duration: 3.5 }, // img5 (right, middle)
    { x: -20, y: 60, rotation: -3, duration: 4 }, // img6 (right, bottom)
  ];

  return (
    <div className="tech-passion-container">
      <div className="floating-images left">
        <FloatingImage
          src={images[0]}
          alt="Floating tech 1"
          className="floating-img img1"
          animationPath={animationPaths[0]}
        />
        <FloatingImage
          src={images[1]}
          alt="Floating tech 2"
          className="floating-img img2"
          animationPath={animationPaths[1]}
        />
        <FloatingImage
          src={images[2]}
          alt="Floating tech 3"
          className="floating-img img3"
          animationPath={animationPaths[2]}
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
          src={images[3]}
          alt="Floating tech 4"
          className="floating-img img4"
          animationPath={animationPaths[3]}
        />
        <FloatingImage
          src={images[4]}
          alt="Floating tech 5"
          className="floating-img img5"
          animationPath={animationPaths[4]}
        />
        <FloatingImage
          src={images[5]}
          alt="Floating tech 6"
          className="floating-img img6"
          animationPath={animationPaths[5]}
        />
      </div>
    </div>
  );
}

export default Section2;
