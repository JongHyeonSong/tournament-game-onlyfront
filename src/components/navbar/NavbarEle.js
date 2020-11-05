import { Link } from "react-router-dom";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  padding-left: 30px;
  color: #fff;
  /* justify-self: flex-start; 모르겟음 */
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    transition: all 2.5s ease-in;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  /* text-align: center; */
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkScroll)`
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  padding: 0.3rem 0;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  background: #01bf71;
  color: #010606;

  padding: 10px 22px;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #06975b;
  }
`;
