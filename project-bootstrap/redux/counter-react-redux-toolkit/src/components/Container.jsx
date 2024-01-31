import React from "react";

function Container({ children }) {
  return (
    <div className=" row justify-content-center my-5">
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
export default Container;
