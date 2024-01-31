import React from "react";
import Controls from "./Controls";
import { useSelector } from "react-redux";


function DisplayCounter() {
  const { counterVal } = useSelector((store) => store.counter);

  const { privateButton } = useSelector((store) => store.privateToggle);
  return (
    <div className="col-lg-6 mx-auto">
      {privateButton ? (
        <p className="lead mb-4">this is private</p>
      ) : (
        <p className="lead mb-4">current counter value :{counterVal}</p>
      )}
      <Controls></Controls>
    </div>
  );
}
export default DisplayCounter;
