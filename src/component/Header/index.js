import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  HeaderWrapper,
  HeaderContainer,
  ProfileContainer,
  LinksWrapper,
  LinksContainer,
  Link,
  HamburgerMenu,
  CollapseMenuWrapper,
  IconWrapper,
} from "./styles";
import { HeaderConfig } from "./HeaderConfig";

import OutSideClickHandler from "../../Utils/Methods/OutSideClickHandler";

import MenuIcon from "../Icons/MenuIcon";
import VendorLogoHeaderIcon from "../Icons/VendorLogoHeaderIcon";
import ShoppingBagIcon from "../Icons/ShoppingBagIcon";
import ProfileImage from "../../Assets/Images/ProfileImage.png";

const Header = (props) => {
  const ref = useRef();
  const [menuCollapse, setMenuCollapse] = useState(false);

  OutSideClickHandler(ref, () => {
    setMenuCollapse(false);
  });
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LinksWrapper>
          <VendorLogoHeaderIcon />
          <LinksContainer>
            {HeaderConfig.map((item) => {
              return <Link>{item.text}</Link>;
            })}
          </LinksContainer>
        </LinksWrapper>
        <ProfileContainer src={ProfileImage}>
          <IconWrapper>
            <ShoppingBagIcon />
            <div className="count">1</div>
          </IconWrapper>
          <div className="profileImage" />
        </ProfileContainer>
        <HamburgerMenu>
          <div ref={ref}>
            <div
              className="iconWrapper"
              onClick={() => setMenuCollapse(!menuCollapse)}
            >
              <MenuIcon fill="black" />
            </div>
            <CollapseMenuWrapper menuCollapse={menuCollapse}>
              {HeaderConfig.map((item) => {
                return <Link>{item.text}</Link>;
              })}
              <Link>
                <IconWrapper>
                  <ShoppingBagIcon />
                  <div className="count">1</div>
                </IconWrapper>
                <div>Order List</div>
              </Link>
            </CollapseMenuWrapper>
          </div>
        </HamburgerMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  src: PropTypes.func,
};

export default Header;
