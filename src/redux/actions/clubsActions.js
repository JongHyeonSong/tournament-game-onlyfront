import Axios from "axios";
import * as types from "./actiontypes";

export const getTournament = (item) => async (dispatch) => {
  const { data } = await Axios.get("/api/groupStage");

  dispatch({ type: types.SET_GROUP_STAGE, payload: data });
};

export const changeClubPower = (clubName, clubPower) => async (dispatch) => {
  dispatch({ type: types.CHANGE_CLUB_POWER, payload: { clubName, clubPower } });
};

export const winTheMatch = (club) => async (dispatch) => {
  dispatch({ type: types.WIN_THE_MATCH, payload: club });
};

export const looseTheMatch = (club) => async (dispatch) => {
  dispatch({ type: types.LOOSE_THE_MATCH, payload: club });
};

export const drawTheMatch = (club) => async (dispatch) => {
  dispatch({ type: types.DRAW_THE_MATCH, payload: club });
};
