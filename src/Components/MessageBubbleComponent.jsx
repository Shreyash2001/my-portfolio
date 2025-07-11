import React from "react";
import "./MessageBubbleComponent.css";

function MessageBubbleComponent() {
  return (
    <div className="intro-container">
      <div className="avatar-wrapper">
        <div className="avatar">
          <img
            src="../assets/image1.png"
            alt="Shreyash"
            className="avatar-img"
          />
        </div>
        <div className="hi-icon">👋</div>
      </div>

      <div className="message-wrapper">
        <div className="message-bubble">
          Hi, I am Shreyash Katare a Full Stack Developer.
        </div>
        <div className="bubble-tail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            viewBox="0 0 22 13"
            fill="none"
          >
            <path
              d="M13.2965 8.70441C15.5695 10.5858 18.4864 11.7165 21.6675 11.7165L21.67 1H8.70396C8.87681 7.22251 4.20993 10.3338 3 10.8523C7.39294 11.651 11.029 10.2151 13.2965 8.70441Z"
              fill="#f0f0f0"
            ></path>
            <path
              d="M21.6675 11.7165C18.4864 11.7165 15.5695 10.5858 13.2965 8.70441C11.029 10.2151 7.39294 11.651 3 10.8523C4.20993 10.3338 8.87681 7.22251 8.70396 1"
              stroke="#ccc"
              stroke-width="0.125em"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MessageBubbleComponent;
