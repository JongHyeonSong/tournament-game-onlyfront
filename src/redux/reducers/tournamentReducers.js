import * as types from "../actions/actiontypes";

import { clubsList } from "../../staticfiles/tournamentInfo/tourment";
const initialState = {
  // firstGroup: clubsList.filter((club, i) => i % 4 === 0),
  // secondGroup: clubsList.filter((club, i) => i % 4 === 1),
  firstGroup: Array(8).fill(null),
  secondGroup: Array(8).fill(null),

  // tournament16: clubsList.slice(0, 16),
  tournament16: Array(16).fill(null),

  drawPotsBoard: Array(2).fill(null),
};

export const tournamentStatusReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TOURNAMENT_GROUP:
      return {
        ...state,
        firstGroup: action.payload.firstGroup,
        secondGroup: action.payload.secondGroup,
      };
    case types.SET_FIRST_SELECTABLE:
      return {
        ...state,
        firstGroup: state.firstGroup.map((club) =>
          club.clubName === action.payload.clubName
            ? { ...club, selectable: action.payload.selectable }
            : club
        ),
      };

    case types.SET_SECOND_SELECTABLE:
      return {
        ...state,
        secondGroup: state.secondGroup.map((club) =>
          club.clubName === action.payload.clubName
            ? { ...club, selectable: action.payload.selectable }
            : club
        ),
      };
    case types.SET_TOURNAMENT_16:
      return {
        ...state,
        tournament16: state.tournament16.map((club, i) =>
          state.tournament16.findIndex((i) => i === null) === i
            ? action.payload
            : club
        ),
      };

    case types.SET_BOARD:
      if (action.payload.index === 0) {
        return { ...state, drawPotsBoard: [action.payload.club, null] };
      }
      return {
        ...state,
        drawPotsBoard: state.drawPotsBoard.map((item, i) =>
          i === action.payload.index ? action.payload.club : item
        ),
      };

    default:
      return state;
  }
};
