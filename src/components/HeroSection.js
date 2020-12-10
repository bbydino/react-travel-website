import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
import video from "../assets/videos/video-1.mp4";

function HeroSection() {
  const trailer = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const getStarted = "https://www.youtube.com/watch?v=NGUP_vxTa7c";

  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>GET YOUR ADVENTURE ON!</h1>
      <p>What are you waiting for?</p>
      <div className="hero-bins">
        <a href={getStarted}>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </a>
        <a href={trailer}>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
