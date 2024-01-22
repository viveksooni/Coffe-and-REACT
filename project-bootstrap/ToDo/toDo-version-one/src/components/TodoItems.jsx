import React from "react";
import TodoItem from "./TodoItem";

function Todoitems({ items,handleDelete }) {
  return (
    <div className="items-container">
      {items.map((item) => (
        <TodoItem
          todo={item.todo}
          key={item.todo + Math.random() + item.date}
          date={item.date}
          handleDelete={handleDelete}
        ></TodoItem>
      ))}
    </div>
  );
}

export default Todoitems;
