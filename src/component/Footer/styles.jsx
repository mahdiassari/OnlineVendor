import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

export const FooterWrapper = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  background-color: #000000;
`;

export const FooterContainer = styled(Row)`
  width: 90%;
  max-width: 1440px;
  justify-content: space-between;
`;

export const LinksWrapper = styled(Row)`
  width: 100%;
  svg {
    cursor: pointer;
  }
`;

export const LinksContainer = styled(Row)`
  width: 100%;
  border-bottom: 1px solid #696e79;
  padding: 33px 0;
  @media only screen and (max-width: 520px) {
    justify-content: center;
  }
`;

export const Link = styled(Row)`
  width: 370px;
  padding: 23px 0;
  color: #c1c4c8;
  cursor: pointer;
  @media only screen and (max-width: 1234px) {
    width: 300px;
  }
  @media only screen and (max-width: 667px) {
    width: 240px;
  }
`;

export const FooterDesc = styled(Row)`
  width: 100%;
  justify-content: space-between;
  margin: 33px 0;
  @media only screen and (max-width: 768px) {
    min-width: 100px;
  }
  .footerText {
    font-size: 0.75rem;
    color: white;
  }
  .footerLogo {
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    width: 132px;
    height: 48px;
  }
`;
