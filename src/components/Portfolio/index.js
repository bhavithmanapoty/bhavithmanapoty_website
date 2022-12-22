import React from "react";
import Icon1 from "../../images/Touche.png";
import Icon2 from "../../images/AutoTrashLogo.png";
import Icon3 from "../../images/Disco Logo.png";
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
} from "./PortfolioElements";

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>My Portfolio</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard
          href="//www.youtube.com/watch?v=vhNcPfZL0sw"
          target="_blank"
          aria-label="Touche Tracker YouTube"
        >
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>Touché Tracker</PortfolioH2>
          <PortfolioP>Custom designed Fencing Scoring Machine</PortfolioP>
        </PortfolioCard>
        <PortfolioCard
          href="//www.youtube.com/watch?v=aWEO5gxiFt8"
          target="_blank"
          aria-label="AutoTrash YouTube"
        >
          <PortfolioIcon src={Icon2} />
          <PortfolioH2>AutoTrash</PortfolioH2>
          <PortfolioP>
            AutoTrash is a smart dustbin that can segregate waste automatically
            using image recognition.
          </PortfolioP>
        </PortfolioCard>
        <PortfolioCard
          href="https://devpost.com/software/discotheque"
          target="_blank"
          aria-label="discotheque"
        >
          <PortfolioIcon src={Icon3} />
          <PortfolioH2>Discotheque</PortfolioH2>
          <PortfolioP>
            Online music streaming service that uses the Twilio Live API to
            allow users to run their own silent disco anywhere.
          </PortfolioP>
        </PortfolioCard>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
