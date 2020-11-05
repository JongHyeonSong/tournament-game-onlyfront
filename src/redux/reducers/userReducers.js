import * as types from "../actions/actiontypes";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER_REGISTER_REQUEST:
      return { loading: true };
    case types.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case types.USER_REGISTER_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER_SIGNIN_REQUEST:
      return { loading: true };
    case types.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case types.USER_SIGNIN_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};
