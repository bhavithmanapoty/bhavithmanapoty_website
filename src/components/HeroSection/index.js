import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  TypedContent,
} from "./HeroElements";
import Typed from "react-typed";

const HeroSection = () => {
  return (
    <HeroContainer id="Home">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>Bhavith Manapoty</HeroH1>
      </HeroContent>
      <TypedContent>
        <Typed
          className="typed-text"
          strings={["Android Studio", "Robotics", "Arduino"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </TypedContent>
    </HeroContainer>
  );
};

export default HeroSection;
