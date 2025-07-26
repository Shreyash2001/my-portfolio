import React, { useState, useRef, useEffect } from "react";
import "./MediaCard.css";

const MediaCard = ({ mediaType, src, chipText, cursorText }) => {
  const [isHovering, setIsHovering] = useState(false);
  const wrapperRef = useRef(null);
  const cursorRef = useRef(null);

  // Function to update cursor position directly via ref (avoids React re-renders)
  const updateCursorPosition = (x, y) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
    }
  };

  // Updates the custom cursor's position as the mouse moves
  const handleMouseMove = (e) => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      updateCursorPosition(x, y);
    }
  };

  // Sets hovering to true when the mouse enters the card area
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Resets the cursor's style to default position when the mouse leaves
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const defaultX = rect.width / 2; // Center horizontally
      const defaultY = rect.height - 50; // 20px from bottom
      updateCursorPosition(defaultX, defaultY);
    }
  };

  // Set initial cursor position on mount
  useEffect(() => {
    handleMouseLeave(); // Initialize to default position
  }, []);

  return (
    <div className="card-container">
      <div
        ref={wrapperRef}
        className={`media-wrapper ${isHovering ? "hovering" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top center chip */}
        <div className="chip">{chipText}</div>

        {mediaType === "image" ? (
          <img src={src} alt="Media content" className="media-element" />
        ) : (
          <video src={src} className="media-element" autoPlay loop muted />
        )}

        {/* Corner boxes */}
        <div className="corner-box top-left"></div>
        <div className="corner-box top-right"></div>
        <div className="corner-box bottom-left"></div>
        <div className="corner-box bottom-right"></div>

        {/* Custom cursor element */}

        <div className="cursor-follower" ref={cursorRef}>
          {cursorText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22" // Adjusted to match viewBox for better scaling; tweak as needed
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            className="speakers-card__cursor-pointer"
          >
            <path
              d="M1.37207 3.99438C0.893838 2.31674 2.63215 0.917659 4.16699 1.65161L19.2695 8.8772L19.415 8.95337C20.8186 9.76057 20.7125 11.8395 19.2295 12.4954L19.0762 12.5559L12.8652 14.7561H12.8643L9.59863 20.4348C8.74532 21.9184 6.5585 21.7032 5.98145 20.1409L5.93066 19.9856L1.37207 3.99438Z"
              fill="#f97028"
              stroke="#f97028"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
