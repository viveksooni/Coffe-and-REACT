import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import "./App.css";
import NoElements from "./components/NoElements"
import Todoitems from "./components/TodoItems";
function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleClick = (workTodo, date) => {
    console.log(workTodo);
    let newItem = [...todoItems, { todo: workTodo, date: date }];

    setTodoItems(newItem);
    console.log(todoItems);
  };

  const handleDelete = (todoname) => {
   

    // for (let i = 0; i < newItems.length; i++) {
   
    //   if (newItems[i].todo == todoname) {
    //     newItems.splice(i, 1);
    //     console.log(newItems);
    //     setTodoItems(newItems);
    //   }
    // }

    let newItems = todoItems.filter((n)=>n.todo!==todoname);
    console.log(newItems)
    setTodoItems(newItems);
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
