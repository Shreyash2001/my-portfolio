import React from "react";
import "./ConnectButton.css";

const ConnectButton = ({
  onClick,
  label = "Click Me",
  Icon = null,
  iconPosition = "right",
  bgColor = "#f97028",
  textColor = "#222",
  borderColor = "black",
}) => {
  return (
    <button
      className="connect-button"
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
      }}
    >
      {iconPosition === "left" && Icon && <Icon className="arrow-icon" />}
      {label}
      {iconPosition === "right" && Icon && <Icon className="arrow-icon" />}
    </button>
  );
};

export default ConnectButton;
