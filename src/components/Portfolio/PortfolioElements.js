import styled from "styled-components";

export const PortfolioContainer = styled.div`
  height: 723px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: 1200px;
  }

  @media screen and (max-width: 768px) {
    height: 1400px;
  }
`;

export const PortfolioWrapper = styled.div`
  margin: 0 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-bottom: 250px;
  grid-gap: 68px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 0 0 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PortfolioCard = styled.a`
  background: #fff;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 360px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(40, 167, 69, 1);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #000000;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const PortfolioIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const PortfolioH1 = styled.h1`
  font-size: 2.5rem;
  color: #4cae50;
  margin-bottom: 64px;
  margin-top: 72px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PortfolioH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PortfolioP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
