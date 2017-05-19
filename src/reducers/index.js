/*
reducer file
./reducers/index.js

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

function counter(state = 0) {
  return state;
}


export default combineReducers({
  counter
});
