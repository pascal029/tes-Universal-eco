import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initState = { users: [], user: {} };

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "users/fetchSuccess":
      return {
        ...state,
        users: action.payload,
      };
    case "user/fetchSuccess":
      return {
        ...state,
        user: action.payload,
      };
    case "users/sort":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
