import counterReducer from "./counter";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
