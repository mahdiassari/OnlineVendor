import React from "react";
import PropTypes from "prop-types";
import {
  FooterWrapper,
  FooterContainer,
  LinksWrapper,
  LinksContainer,
  Link,
  FooterDesc,
} from "./styles";
import { FooterConfig } from "./FooterConfig";

import VendorLogoFooterIcon from "../Icons/VendorLogoFooterIcon";
import VendorLogo from "../../Assets/Images/VendorLogo.png";

const Footer = (props) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LinksWrapper>
          <LinksContainer>
            {FooterConfig.map((item) => {
              return <Link>{item.text}</Link>;
            })}
          </LinksContainer>
        </LinksWrapper>
        <FooterDesc src={VendorLogo}>
          <div className="footerText">2020 Cart2Curb Copyright</div>
          <div className="footerLogo" />
        </FooterDesc>
      </FooterContainer>
    </FooterWrapper>
  );
};

Footer.propTypes = {};

export default Footer;
