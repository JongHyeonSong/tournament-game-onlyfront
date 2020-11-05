import * as types from "../actions/actiontypes";

const initialState = { openedMatch: 0, days: Array(6).fill(false) };

export const groupStageReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_OPENED_MATCH:
      return { ...state, openedMatch: state.openedMatch + 1 };
    case types.OPEN_DAYS:
      return {
        ...state,
        days: state.days.map((day, i) =>
          i + 1 === action.payload ? true : day
        ),
      };

    default:
      return state;
  }
};
