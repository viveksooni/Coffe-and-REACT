import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
function AddTodo({ handleClick }) {
  const [workTodo, setWorkTodo] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            value={workTodo}
            placeholder="Enter Todo Here"
            onChange={(e) => {
              setWorkTodo(e.target.value);
            }}
          />
        </div>
        <div className="col-4">
          <input
            value={date}
            type="date"
            onChange={(e) => {
              let date = e.target.value;
              setDate(date);
            }}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => {
              handleClick(workTodo, date);
              setDate("");
              setWorkTodo("");
            }}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
