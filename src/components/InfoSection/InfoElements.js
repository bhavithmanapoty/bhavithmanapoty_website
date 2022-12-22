import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#343a40" : "#101522")};
`;

export const InfoWrapper = styled.div`
  display: flex;
  height: 723px;

  @media screen and (max-width: 768px) {
    height: 1100px;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media screen and (max-width: 280px) {
    height: 1200px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const ImgCol = styled.div`
  flex: 50%;
  padding: 55px 0 0 55px;

  @media screen and (max-width: 768px) {
    flex: 100%;
    padding: 0;
  }
`;

export const TextCol = styled.div`
  flex: 50%;
  padding: 55px;

  @media screen and (max-width: 768px) {
    flex: 100%;
    padding: 0 55px 0;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#28a745" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const Img = styled.img`
  @media screen and (max-width: 768px) {
    // height: 292px;
    // width: 187px;
    clip-path: circle(200px at 50% 50%);
    width: 100%;
  }
`;
