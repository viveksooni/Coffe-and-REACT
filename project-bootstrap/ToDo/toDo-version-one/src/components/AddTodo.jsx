import React, { useContext, useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { todoItemsContext } from "../store/todo-item-store";
function AddTodo() {
  // const [workTodo, setWorkTodo] = useState("");
  // const [date, setDate] = useState("");

  const workTodo = useRef();
  const dateDue = useRef();
  const { AddItems } = useContext(todoItemsContext);

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" ref={workTodo} placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input ref={dateDue} type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => {
              AddItems(workTodo.current.value, dateDue.current.value);
              workTodo.current.value = "";
              dateDue.current.value = "";
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
