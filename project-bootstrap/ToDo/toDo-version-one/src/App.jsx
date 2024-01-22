import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import "./App.css";
import NoElements from "./components/NoElements"
function App() {
  let items = [
    { todo: "kuch karo", date: "12/10/2023" },
    { todo: "hi karo", date: "11/10/2023" },
  ];
  const [todoItems, setTodoItems] = useState(items);

  const handleClick = (workTodo, date) => {
    console.log(workTodo);
    let newItem = [...todoItems, { todo: workTodo, date: date }];

    setTodoItems(newItem);
    console.log(todoItems);
  };

  const handleDelete = (todoname) => {
    let newItems = [...todoItems];

    for (let i = 0; i < newItems.length; i++) {
   
      if (newItems[i].todo == todoname) {
        newItems.splice(i, 1);
        console.log(newItems);
        setTodoItems(newItems);
      }
    }
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleClick={handleClick} />
      <NoElements items={todoItems} ></NoElements>
      <TodoItems items={todoItems} handleDelete={handleDelete}></TodoItems>
    </center>
  );
}

export default App;
