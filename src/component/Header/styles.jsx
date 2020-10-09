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

export const HeaderWrapper = styled(Row)`
  width: 100%;
  height: 120px;
  position: fixed;
  top: 0;
  justify-content: center;
  background-color: white;
  z-index: 1;
`;

export const HeaderContainer = styled(Row)`
  width: 90%;
  max-width: 1440px;
  height: 100%;
  justify-content: space-between;
`;

export const ProfileContainer = styled(Row)`
  min-width: 150px;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    min-width: 100px;
  }
  @media only screen and (max-width: 480px) {
    display: none;
  }
  .profileImage {
    width: 50px;
    height: 50px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    position: relative;
  }
`;

export const IconWrapper = styled(Row)`
  position: relative;
  cursor: pointer;  
  .count {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-size: 0.75rem;
  }
  @media only screen and (max-width: 480px) {
    margin-right: 15px;
  }
`;

export const LinksWrapper = styled(Row)`
  min-width: 30%;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;

export const LinksContainer = styled(Row)`
  min-width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const Link = styled(Row)`
  font-size: 0.875rem;
  color: #c1c4c8;
  margin: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin: 10px;
  }
`;

export const HamburgerMenu = styled(Row)`
  position: relative;
  @media only screen and (min-width: 480px) {
    display: none;
  }
  .iconWrapper {
  }
`;

export const CollapseMenuWrapper = styled(Col)`
  width: 200px;
  position: absolute;
  top: 33px;
  right: 0;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 20px;
  display: ${(props) => props.menuCollapse !== true && "none"};
  @media only screen and (min-width: 480px) {
    display: none;
  }
  .iconWrapper {
  }
`;
