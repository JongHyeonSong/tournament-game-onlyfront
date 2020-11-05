import React from "react";
import { FaFacebook } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
} from "./FooterEle";
import { animateScroll } from "react-scroll";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>후원사</FooterLinkTitle>
            <FooterLink to="/">톱텍 </FooterLink>
            <FooterLink to="/">태영건설 </FooterLink>
            <FooterLink to="/">LG화학 </FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>협력해주신 분</FooterLinkTitle>
            <FooterLink to="/">대웅 </FooterLink>
            <FooterLink to="/">신세계 </FooterLink>
            <FooterLink to="/">쌍용건설 </FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>자회사</FooterLinkTitle>
            <FooterLink to="/">포스코 </FooterLink>
            <FooterLink to="/">호텔신라 </FooterLink>
            <FooterLink to="/">하나은행 </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>

        <SocialMediaWrap>
          <SocialLogo onClick={() => animateScroll.scrollToTop()} to="/">
            SJH
          </SocialLogo>
          <WebsiteRights>
            SJH @ 2020 {new Date().getFullYear()} All rights reserved
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink to="/">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink to="/">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink to="/">
              <FaFacebook />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
