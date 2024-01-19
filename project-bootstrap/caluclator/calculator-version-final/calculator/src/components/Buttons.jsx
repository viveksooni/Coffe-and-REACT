import React from "react";
import styles from "./Buttons.module.css";
function Buttons({clickButton}) {
  let buttons = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
  ];
  return (
    <>
      <div className={styles.buttons}></div>
      {buttons.map((button) => (
        <button className={styles.button} key={button} value={button}
        onClick={(e)=>{clickButton(e)}}>
          {button}
        </button>
      ))}
    </>
  );
}

export default Buttons;
