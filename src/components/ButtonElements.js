import styled from "styled-components";

import { Link as LinkScroll } from "react-scroll";

const darkColor = "#010606";
const primaryColor = "#01BF71";

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? primaryColor : darkColor)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? darkColor : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-items: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-align: center;

  pointer-events: ${({ unClickable }) => (unClickable ? "none" : "auto")};
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#000" : primaryColor)};
  }
`;

export const MyButton = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? primaryColor : darkColor)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? darkColor : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-items: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-align: center;
  pointer-events: ${({ unClickable }) => (unClickable ? "none" : "auto")};
  width: 100%;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#000" : primaryColor)};
  }
`;
