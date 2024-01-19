import React, { useState } from "react";

function Clock() {
  let date = new Date();
  const [time, setTime] = useState(`${date.toLocaleDateString()}-${date.toLocaleTimeString()}`);

  setInterval(() => {
    date = new Date();
    setTime(`${date.toLocaleDateString()}-${date.toLocaleTimeString()}`);
  }, 1000);

  return (
    <>
      <h1 className="text-center">{time}</h1>
    </>
  );
}

export default Clock;
