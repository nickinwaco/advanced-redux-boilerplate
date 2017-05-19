/*
COMPONENT
./components/counter.js

dependencies:
1.  C:> yarn add prop-types

import React from "redux";
import  PropTypes from "prop-types";

export default Counter;
*/


import React from "redux";
import PropTypes from "prop-types";

function Counter(props) {
  console.log("props in counter component", props);
  return (
    <div>
      {props.value}
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
