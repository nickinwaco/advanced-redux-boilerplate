const INCREASE_COUNTER = "INCREASE_COUNTER";
const DECREASE_COUNTER = "DECREASE_COUNTER";

function increaseCounter() {
  return {
    type: INCREASE_COUNTER
  };
}


function decreaseCounter() {
  return {
    type: DECREASE_COUNTER
  };
}
