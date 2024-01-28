import React, { useContext } from "react";
import { todoItemsContext } from "../store/todo-item-store";

function NoElements() {
  const { todoItems: items } = useContext(todoItemsContext);

  return (
    <>
      {items.length == 0 ? (
        <h1>there is nothing to do, just die...💀</h1>
      ) : null}
    </>
  );
}

export default NoElements;
