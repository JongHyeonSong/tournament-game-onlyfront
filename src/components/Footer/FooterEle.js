import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
  color: #fff;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    transition: all 0.2s ease-in-out;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  margin: 16px;
  /* text-align: left; */

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  display: block;
  padding: 10px 10px;
  background: transparent;
  border-radius: 10px;
  color: #fff;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
    background: gray;
  }
`;

// social part
export const SocialMediaWrap = styled.section`
  max-width: 1000px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;

  /* display: flex; */
  /* align-items: center; */
  /* margin-bottom: 16px; */
  /* justify-self: start; */
`;

export const WebsiteRights = styled.div`
  display: flex;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
