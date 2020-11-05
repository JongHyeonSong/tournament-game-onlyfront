import Axios from "axios";
import * as types from "./actiontypes";
import Cookie from "js-cookie";

export const register = (name, email, password) => async (dispatch) => {
  // user-singin-request 디스패치할것
  dispatch({
    type: types.USER_REGISTER_REQUEST,
    payload: { name, email, password },
  });

  const url = "/api/users/register";
  const body = { name, email, password };

  const { data } = await Axios.post(url, body);

  if (!data.err) {
    dispatch({ type: types.USER_REGISTER_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } else {
    // 중복 에러 디스패치
    dispatch({ type: types.USER_REGISTER_FAIL, payload: data.err });
  }
};

// signin
export const singin = (email, password) => async (dispatch) => {
  dispatch({
    type: types.USER_SIGNIN_REQUEST,
    payload: { email, password },
  });

  const url = "/api/users/signin";
  const body = { email, password };
  const { data } = await Axios.post(url, body);

  if (!data.err) {
    dispatch({ type: types.USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } else {
    dispatch({ type: types.USER_SIGNIN_FAIL, payload: data.err });
  }
};
