import React, { useEffect, useState } from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavLinks,
  NavLogo,
  NavUl,
} from "./NavbarEle";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSidebarAction } from "../../redux/actions/sidebarActions";

import { animateScroll } from "react-scroll";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const dispatch = useDispatch();
  const toggleX = () => {
    dispatch(toggleSidebarAction(true));
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo onClick={() => animateScroll.scrollToTop()} to="/">
          Home
        </NavLogo>

        <MobileIcon onClick={toggleX}>
          <FaBars />
        </MobileIcon>

        <NavUl>
          <li>
            <NavLinks
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="groupStage"
              activeClass="active" //active 클래스 주입하는것 active는디폴트
            >
              groupStage
            </NavLinks>
          </li>
          <li>
            <NavLinks
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="drawPots"
              activeClass="active" //active 클래스 주입하는것 active는디폴트
            >
              drawPots
            </NavLinks>
          </li>
          <li>
            <NavLinks
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="tournament"
              activeClass="active" //active 클래스 주입하는것 active는디폴트
            >
              tournament
            </NavLinks>
          </li>
          <li>
            <NavLinks
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="services"
              activeClass="active" //active 클래스 주입하는것 active는디폴트
            >
              services
            </NavLinks>
          </li>
        </NavUl>
        <NavBtn>
          {/* <NavBtnLink to="/signin">Sign</NavBtnLink> 임시로 로그인막음*/}
          <NavBtnLink to="/">Sign</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
