/*
ACTIONS file
./actions/index.js

http://redux.js.org/docs/basics/Actions.html

this is payloads are sent into the Store.
they are the ONLY action/manipulation into the store used by REDUCERS
REDUCERS actually edit the State (in the Store)

you send this data by store.dispatch() in your smart components

*/

export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";

// ACTION CREATORS ---they simply return an action
export function increaseCounter() {
  return {
    type: INCREASE_COUNTER
  };
}


export function decreaseCounter() {
  return {
    type: DECREASE_COUNTER
  };
}
