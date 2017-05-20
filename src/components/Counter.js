/*
COMPONENT
./components/counter.js

these are DUMB COMPONENTs

dependencies:
1.  C:> yarn add prop-types

import React from "redux";
import  PropTypes from "prop-types";

export default Counter;
*/


import React from "react";
import PropTypes from "prop-types";

function Counter(props) {
  console.log("props in counter component", props);
  return (
    <div>
      <button onClick={props.onIncrease}> + </button>
        Current Value: {props.value}
      <button onClick={props.onDecrease}> - </button>
    </div>
  );
}


/* Setup Props so that data is never inferred
   props is always an object
*/
Counter.propTypes = {
  value: PropTypes.number.isRequired
};

export default Counter;
