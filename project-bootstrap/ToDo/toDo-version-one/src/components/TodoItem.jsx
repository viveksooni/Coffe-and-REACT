import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { todoItemsContext } from "../store/todo-item-store";

function TodoItem({ todo, date }) {
  const { DeleteItems } = useContext(todoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todo}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => DeleteItems(todo)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
