import { clubsList } from "../../staticfiles/tournamentInfo/tourment";
import * as types from "../actions/actiontypes";

export const clubsReducers = (state = clubsList, action) => {
  switch (action.type) {
    case types.CHANGE_CLUB_POWER:
      return state.map((club) => {
        return club.clubName === action.payload.clubName
          ? { ...club, clubPower: action.payload.clubPower }
          : club;
      });
    case types.WIN_THE_MATCH:
      return state.map((club) => {
        if (club.recentMatch.filter((item) => item !== null).length >= 6)
          return club;
        return club.clubName === action.payload.clubName
          ? {
              ...club,
              clubScore: club.clubScore + 3,
              recentMatch: club.recentMatch.map((match, i) =>
                i === club.recentMatch.findIndex((item) => item === null)
                  ? 3
                  : match
              ),
            }
          : club;
      });

    case types.LOOSE_THE_MATCH:
      return state.map((club) => {
        if (club.recentMatch.filter((item) => item !== null).length >= 6)
          return club;
        return club.clubName === action.payload.clubName
          ? {
              ...club,
              clubScore: club.clubScore + 0,
              recentMatch: club.recentMatch.map((match, i) =>
                i === club.recentMatch.findIndex((item) => item === null)
                  ? 0
                  : match
              ),
            }
          : club;
      });
    case types.DRAW_THE_MATCH:
      return state.map((club) => {
        if (club.recentMatch.filter((item) => item !== null).length >= 6)
          return club;
        return club.clubName === action.payload.clubName
          ? {
              ...club,
              clubScore: club.clubScore + 1,
              recentMatch: club.recentMatch.map((match, i) =>
                i === club.recentMatch.findIndex((item) => item === null)
                  ? 1
                  : match
              ),
            }
          : club;
      });

    default:
      return state;
  }
};
