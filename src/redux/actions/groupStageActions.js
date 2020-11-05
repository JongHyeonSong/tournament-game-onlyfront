import * as types from "./actiontypes";

export const openMatch = () => ({
  type: types.ADD_OPENED_MATCH,
});

export const openDay = (day) => ({
  type: types.OPEN_DAYS,
  payload: day,
});
