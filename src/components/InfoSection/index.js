import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  ImgCol,
  TextCol,
  Heading,
  Subtitle,
  Img,
} from "./InfoElements";
import image from "../../images/Me.png";

const InfoSection = ({
  lightBg,
  id,
  lightText,
  headline,
  darkText,
  description1,
  description2,
  description3,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <ImgCol>
          <Img
            className="ILogo"
            src={image}
            alt={"Image of Bhavith Manapoty"}
          />
        </ImgCol>
        <TextCol>
          <Heading lightText={lightText}>{headline}</Heading>
          <Subtitle darkText={darkText}>{description1}</Subtitle>
          <Subtitle darkText={darkText}>{description2}</Subtitle>
          <Subtitle darkText={darkText}>{description3}</Subtitle>
        </TextCol>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
