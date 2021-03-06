/*
CONTAINER file aka *SMART COMPONENT*
./container/index.js

this file "glues" the Dumb components to the store.

actions >> reducers (update state) >> components
>> containers (update store) >> store (master file of state)



http://redux.js.org/docs/basics/ExampleTodoList.html
\Usage with React \ Connect

dependencies


import Counter from "../components/counter.js";
import {connect} from "react-redux";
function mapStateToProps(state){}   <--- ALWAYS return and object
function mapDisptachToProps(dispatch){}  <--- ALWAYS return an object...from a reducer
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component NAME)


*/

import Counter from "../components/Counter.js";
import {connect} from "react-redux";
import {
  increaseCounter,
  decreaseCounter
} from "../actions";


function mapStateToProps(state) {
  console.log("in map state to props", state)
  return {
    value: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => {
      console.log("increase");
      dispatch(increaseCounter());
    },
    onDecrease: () => {
      console.log("decrease")
      dispatch(decreaseCounter());
    }
  };
}

// sending everything to PROPS
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
