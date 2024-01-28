import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import NoElements from "./components/NoElements";
import TodoContextPorvider from "./store/todo-item-store";

function App() {
  return (
    <TodoContextPorvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <NoElements></NoElements>
        <TodoItems></TodoItems>
      </center>
    </TodoContextPorvider>
  );
}

export default App;
