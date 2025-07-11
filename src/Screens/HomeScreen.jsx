import React from "react";
import CurvedLines from "../Components/CurvedLines";
import MessageBubbleComponent from "../Components/MessageBubbleComponent";
import ConnectButton from "../Components/ConnectButton";
import "./HomeScreen.css";
import ConnectDrawer from "../Components/ConnectDrawer";

function HomeScreen() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const getTitleAndSubtitle = () => {
    const title =
      "Building Smart, Scalable, and Stunning Web & Mobile Experiences";
    const subtitle =
      "Fullstack Developer turning ideas into powerful digital products — blending clean code, modern design, and real-world impact.";
    return (
      <div className="homescreen_title_container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    );
  };
  return (
    <div>
      <CurvedLines showRight={true} />
      <MessageBubbleComponent />
      {getTitleAndSubtitle()}
      <ConnectButton
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      />
      <ConnectDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <CurvedLines showLeft={true} />
    </div>
  );
}

export default HomeScreen;
