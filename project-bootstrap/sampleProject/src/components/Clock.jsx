import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return ()=>{
      clearInterval(intervalId);
      console.log("cancel interval")
    }
  },[])
  setInterval(() => {
    
    setTime(new Date());
  }, 1000);

  return (
    <>
      <h1 className="text-center">{`${time.toLocaleDateString()}-${time.toLocaleTimeString()}`}</h1>
    </>
  );
}

export default Clock;
