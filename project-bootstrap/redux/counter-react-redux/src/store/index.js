import { createStore } from "redux";

//initail value
const INITAL_VALUE = {
  counter: 1,
  private: false,
};

//reducer function, it takes two args store and action.. returns store
const reducer = (store = INITAL_VALUE, action) => {
  let newStore = store;
  if (action.type == "INC") {
    // newStore = { counter: store.counter + 1, private: store.private };
    newStore = { ...store, counter: store.counter + 1 };
  }
  if (action.type == "DRC") {
    newStore = { ...store, counter: store.counter - 1 };
  }
  if (action.type == "ADD") {
    let number = action.payload.number;
    newStore = { ...store, counter: store.counter + Number(number) };
  }
  if (action.type == "SUB") {
    let number = action.payload.number;
    newStore = {
      ...store,
      counter: store.counter - Number(number),
    };
  }
  if (action.type == "toggle") {
    newStore = { ...store, private: !store.private };
  }

  return newStore;
};

//1) create store
const store = createStore(reducer);//needs ruducer function

////////////////////////////////////////////
// const subscriber = () => {
//   const currState = store.getState();
//   console.log(currState);
// };
// store.subscribe(subscriber);
////////////////////////////////////////// no need to subscribe


//export store
export default store;
