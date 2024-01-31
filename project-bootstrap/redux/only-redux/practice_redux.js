const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};
const reducerFunction = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  }
  if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  }
  //store is immutable
  return newStore;
};
const store = redux.createStore(reducerFunction);

const subscriber = () => {
  state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
