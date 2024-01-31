import React from "react";
import DisplayCounter from "./DisplayCounter";

function Header() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
      <DisplayCounter></DisplayCounter>
    </div>
  );
}

export default Header;
