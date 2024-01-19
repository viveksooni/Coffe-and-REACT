import React from "react";
import style from "./List.module.css";
function List({ name, unfriend, brought, addMarked }) {
  return (
    <>
      <li className={`list-group-item ${brought && "list-group-item-primary"}`}>
        {name.toUpperCase()}
        <button
          className={`${style.btn} btn btn-success`}
          onClick={() => unfriend(name)}
        >
          un-friend
        </button>
        <button
          className={`${style.btn} btn btn-danger`}
          onClick={() => addMarked(name)}
        >
          mark
        </button>
      </li>
    </>
  );
}

export default List;
