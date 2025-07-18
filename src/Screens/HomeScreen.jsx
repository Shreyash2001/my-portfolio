import React from "react";
import CurvedLines from "../Components/CurvedLines";
import MessageBubbleComponent from "../Components/MessageBubbleComponent";
import ConnectButton from "../Components/ConnectButton";
import "./HomeScreen.css";
import ConnectDrawer from "../Components/ConnectDrawer";
import ShuffleCard from "../Components/ShuffleCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TechCarousel from "../Components/TechCarousel";
import { technologies } from "../utils/technology_data";
import Section2 from "./Sections/Section2";

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
      <div className="home_middle_container">
        <MessageBubbleComponent />
        {getTitleAndSubtitle()}
        <ConnectButton
          label="Let's Connect"
          Icon={ArrowForwardIcon}
          onClick={() => {
            setIsDrawerOpen(true);
          }}
        />

        <ConnectDrawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
        <div style={{ position: "relative" }}>
          <ShuffleCard />
        </div>
      </div>
      <CurvedLines showLeft={true} />
      <div style={{ maxWidth: "100%" }}>
        <TechCarousel logos={technologies} />
      </div>
      <div style={{ backgroundColor: "#222", padding: "20px 40px" }}>
        <Section2 />
      </div>
    </div>
  );
}

export default HomeScreen;
