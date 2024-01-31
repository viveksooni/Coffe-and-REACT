import React from "react";
import Controls from "./Controls";
import { useSelector } from "react-redux";
function DisplayCounter() {
  const counter = useSelector((store) => store.counter);
  const toggle = useSelector((store)=>store.private);
  return (
    <div className="col-lg-6 mx-auto">
      {toggle ? (
        <p className="lead mb-4">this is private</p>
      ) : (
        <p className="lead mb-4">current counter value :{counter}</p>
      )}
      <Controls></Controls>
    </div>
  );
}
export default DisplayCounter;
