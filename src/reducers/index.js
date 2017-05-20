/*
reducer file
./reducers/index.js

Purpose of a reducer is to update the Store

dependency
1.  c:/>yarn add react-redux
2.  c:/>yarn add redux


sample:

import {combineReducers}  from "redux";

function counter(state=0){
  return state;
}

export default combineReducers({counter}); ----is always an object

next go to store & create store

*/

import {combineReducers} from "redux";
import {
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from "../actions";

function counter(state = 0, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state - 1;
  }

  return state;
}


export default combineReducers({
  counter
});
