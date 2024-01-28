import React from "react";

function Loading() {
  return (
    <>
      <div
        className="spinner-border text-primary spinn"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
}
export default Loading;
