function TodoItem({ todo, date, handleDelete}) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todo}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => handleDelete(todo)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}


export default TodoItem;
