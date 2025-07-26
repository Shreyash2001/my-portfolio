import React from "react";
import "./Section3.css";
import MediaCard from "../../Components/MediaCard";

function Section3() {
  return (
    <div>
      <div className="bordered-section">
        <h1>
          Our 2025 <span className="highlight speaker">Speaker</span>{" "}
          <span className="highlight lineup">Lineup</span>
        </h1>
      </div>
      <div>
        <MediaCard
          cursorText={"React.js"}
          chipText={"Frontend"}
          mediaType={"image"}
          src={
            "https://images.unsplash.com/photo-1743398665751-2cd5d3cc9d46?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
      <div></div>
    </div>
  );
}

export default Section3;
