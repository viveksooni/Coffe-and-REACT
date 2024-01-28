import React from "react";
import { createContext, useReducer } from "react";

export const todoItemsContext = createContext({
  todoItems: [],
  AddItems: () => {},
  DeleteItems: () => {},
});

function todoReduces(curr_state, action) {
  let newItem = curr_state;
  if (action.type === "ADD_ITEM") {
    newItem = [
      ...curr_state,
      { todo: action.payload.workTodo, date: action.payload.date },
    ];
  } else if (action.type === "DEL_ITEM") {
    newItem = newItem.filter((item) => item.todo != action.payload.todoname);
  }
  return newItem;
}

function TodoContextPorvider({ children }) {
  const [todoItems, dispatchTodoItems] = useReducer(todoReduces, []);

  const AddItems = (workTodo, date) => {
    const newItems = {
      type: "ADD_ITEM",
      payload: {
        workTodo,
        date,
      },
    };
    dispatchTodoItems(newItems);
  };

  const DeleteItems = (todoname) => {
    const deleteItem = {
      type: "DEL_ITEM",
      payload: {
        todoname,
      },
    };
    dispatchTodoItems(deleteItem);
  };

  return (
    <todoItemsContext.Provider value={{ DeleteItems, AddItems, todoItems }}>
      {children}
    </todoItemsContext.Provider>
  );
}

export default TodoContextPorvider;
