import React, {useState} from 'react';
function AddTodo({handleClick}) {
  const [workTodo,setWorkTodo] = useState("");
  const [date,setDate] = useState("");
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={(e) => {
              setWorkTodo(e.target.value);
            }}
          />
        </div>
        <div className="col-4">
          <input
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
            onClick={() => handleClick(workTodo,date)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
