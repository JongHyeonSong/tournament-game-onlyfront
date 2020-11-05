import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { toggleSidebarReducer } from "./reducers/sidebarReducers";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";
import Cookie from "js-cookie";
import { clubsReducers } from "./reducers/clubsReducers";
import { groupStageReducers } from "./reducers/groupStageReducers";
import { tournamentStatusReducers } from "./reducers/tournamentReducers";

const userInfo = Cookie.getJSON("userInfo");
// const clubsInfo = Cookie.getJSON("clubsInfo") || clubs;

const initialState = { userSignin: { userInfo } };

const reducer = combineReducers({
  isOpen: toggleSidebarReducer,
  userRegister: userRegisterReducer,
  userSignin: userSigninReducer,
  clubs: clubsReducers,
  groupStatus: groupStageReducers,
  tournamentStatus: tournamentStatusReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

// import Cookie from "js-cookie";
// const cartItems = Cookie.getJSON("cartItems") || [];
// const userInfo = Cookie.getJSON("userInfo") || null;
