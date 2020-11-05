import * as types from "./actiontypes";

export const toggleSidebarAction = (isOpen) => {
  return {
    type: types.TOGGLE_SIDE_BAR,
    payload: isOpen,
  };
};
