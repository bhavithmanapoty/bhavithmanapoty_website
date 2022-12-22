import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  TypedContent,
} from "./HeroElements";
import Typed from "react-typed";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <HeroContainer id="Home">
      <HeroBg>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 2,
                },
              },
            },
            particles: {
              color: {
                value: "#4cae50",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 600,
                },
                value: 40,
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "square",
              },
              size: {
                value: { min: 2, max: 7 },
              },
            },
            detectRetina: false,
          }}
        />
      </HeroBg>
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
