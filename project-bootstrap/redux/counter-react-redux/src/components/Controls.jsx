import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();
  const handleInc = () => dispatch({ type: "INC" });
  const handleDrc = () => dispatch({ type: "DRC" });

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { number: number.current.value } });
    number.current.value = "";
  };
  const handleSub = () => {
    dispatch({ type: "SUB", payload: { number: number.current.value } });
    number.current.value = "";
  };
  const handleToggle =()=>{
    dispatch({type:"toggle"})
  }
  const number = useRef();
  return (
    <>
      {" "}
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleInc}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDrc}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handleToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3">
        <input type="text" placeholder="Enter number" ref={number} />
        <button
          type="button"
          className="btn btn-info btn-lg px-4 gap-3"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={() => {
            handleSub(number.current.value);
            number.current.value = "";
          }}
        >
          Substract
        </button>
      </div>
    </>
  );
}

export default Controls;
