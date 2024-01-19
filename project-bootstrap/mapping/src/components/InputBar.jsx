import React, { useState } from "react";
import style from "./InputBox.module.css";

function InputBar({ handleOnKeyDown, handleOnclick }) {
  const [name, setName] = useState({});
  return (
    <>
      <input
        type="text"
        placeholder="Enter friend name"
        className={`${style.inputBox}`}
        onKeyDown={handleOnKeyDown}
        
        onChange={(e) => {setName(e)}}
      />
      <button className="btn btn-primary" onClick={() => handleOnclick(name)}>
        ADD
      </button>
    </>
  );
}
export default InputBar;
