import React from 'react'
import {HeroContainer, HeroBg, HeroContent, HeroH1, TypedContent} from './HeroElements'
import Typed from "react-typed";
import Particles from "react-particles-js";

const HeroSection = () => {
    return (
        <HeroContainer id="Home">
            <HeroBg>
                <Particles 
                    params={{
                        particles: {
                            number: {
                                value: 38,
                                density: {
                                enable: true,
                                value_area: 1200
                             }
                            },
                        shape: {
                            type: "square",
                            stroke: {
                                width: 7,
                                color:  "#4cae50"
                            }
                        },
                        move: {
                            speed: 2
                        }
                    }         
                }}
                />
            </HeroBg>
            <HeroContent>
                <HeroH1>Bhavith Manapoty</HeroH1>
            </HeroContent>
            <TypedContent>
                <Typed
                    className="typed-text"
                    strings={["Android Studio", "Robotics", "Arduino", "Image Classification"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
               />
            </TypedContent>
            
        </HeroContainer>
    )
}

export default HeroSection
