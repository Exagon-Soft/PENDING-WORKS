import React, { useState } from "react";
import Video from "../../videos/heroVideo.mp4";
import { Button } from "../ButtomElements";
import {
  HeroContainer,
  HeroBG,
  VideoBG,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroBtnWrapper,
  Arrowforward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBG>
          <VideoBG autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBG>
        <HeroContent>
          <HeroTitle>An Up-to-Date Team</HeroTitle>
          <HeroDescription>
            Have all your office organized , without delaying the work. Get the
            maximum of your day. Join up now and obtain an automatized guide of
            your daily tasks and your current progress.
          </HeroDescription>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Get started {hover ? <Arrowforward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
