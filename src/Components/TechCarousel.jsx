import React, { useRef } from "react";
import "./TechCarousel.css";

const TechCarousel = () => {
  const carouselRef = useRef(null);

  // List of technologies with icons
  const technologies = [
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "Java",
      icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python.png",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    },
  ];

  return (
    <div className="carousel-container">
      <div ref={carouselRef} className="carousel-slide">
        {technologies.map((tech, index) => (
          <div key={`original-${index}`} className="carousel-item">
            <img
              src={tech.icon}
              alt={`${tech.name} icon`}
              className="carousel-icon"
            />
            <span className="carousel-text">{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="carousel-slide">
        {technologies.map((tech, index) => (
          <div key={`clone-${index}`} className="carousel-item">
            <img
              src={tech.icon}
              alt={`${tech.name} icon`}
              className="carousel-icon"
            />
            <span className="carousel-text">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
