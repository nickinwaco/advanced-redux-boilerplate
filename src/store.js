/*
Store file
./store.js

http://redux.js.org/docs/basics/Store.html
+
add the Redux toolbar
https://github.com/zalmoxisus/redux-devtools-extension#usage
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

dependency
none

sample code:
import { createStore } from "redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer);
export default createStore(rootReducer)

*/


import { createStore } from "redux";
import rootReducer from "./reducers";

// const store = createStore(rootReducer);
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
