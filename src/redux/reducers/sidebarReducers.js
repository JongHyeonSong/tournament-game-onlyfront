import * as types from "../actions/actiontypes";

export const toggleSidebarReducer = (state = !1, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDE_BAR:
      return action.payload;
    default:
      return state;
  }
};
