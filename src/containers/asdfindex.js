/*
CONTAINER file
./container/index.js

this file "glues" the Dumb components to the store
http://redux.js.org/docs/basics/ExampleTodoList.html
>>Usage with React >> Connect

dependencies


import Counter from "../components/counter.js";
import {connect} from "react-redux";
function mapStateToProps(state){}   <--- ALWAYS return and object
function mapDisptachToProps(dispatch){}  <--- ALWAYS return an object...from a reducer
export default connect(
  mapStateToProps,
  mapDisptachToProps
)(component NAME)


*/
//
// import Counter from "../components/counter.js";
// import {connect} from "react-redux";
//
//
// function mapStateToProps(state) {
//   console.log("in map state to props" , state)
//   return {
//     value: 3
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//
//   };
// }
//
// //sending everything to PROPS
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);
