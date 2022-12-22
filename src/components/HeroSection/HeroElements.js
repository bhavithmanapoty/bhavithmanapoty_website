import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #343a40;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 723px;
  width: 100%;
  position: relative;
  z-index: 0;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 723px;
  // overflow: hidden;
  // z-index: 0;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 100px;
  position: absolute;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #28a745;
  font-size: 48px;
  text-align: center;
  padding-bottom: 200px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const TypedContent = styled.div`
  padding-bottom: 20px;
`;
