import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CloseIcon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarEle";

import { toggleSidebarAction } from "../../redux/actions/sidebarActions";
const Sidebar = () => {
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();

  const toggleX = () => {
    dispatch(toggleSidebarAction(false));
  };
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseIcon onClick={toggleX} />
      <SidebarMenu>
        <SidebarLink to="groupStage" onClick={toggleX}>
          groupStage
        </SidebarLink>
        <SidebarLink to="drawPots" onClick={toggleX}>
          drawPots
        </SidebarLink>
        <SidebarLink to="tournament" onClick={toggleX}>
          tournament
        </SidebarLink>
        <SidebarLink to="services" onClick={toggleX}>
          services
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">hi</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
