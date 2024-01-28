import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoItemsContext } from "../store/todo-item-store";

function Todoitems() {
  const { todoItems: items } = useContext(todoItemsContext);
  return (
    <div className="items-container">
      {items.map((item) => (
        <TodoItem
          todo={item.todo}
          key={item.todo + Math.random() + item.date}
          date={item.date}
        ></TodoItem>
      ))}
    </div>
  );
}

export default Todoitems;
