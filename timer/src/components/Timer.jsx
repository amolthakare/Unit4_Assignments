import React, { useState, useEffect } from "react";

const Timer = ({ start, end }) => {
  const [timer, setTimer] = useState(start);

  useEffect(() => {
    let id = setInterval(() => {
      if (timer < end) {
        setTimer(timer+1);
      } else {
        clearInterval(id);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [timer]);
  return (
    <div>
      <h1>Timer : {timer} </h1>
      <h2>Timer start: {start} </h2>
      <h2>Timer End: {end} </h2>
      <button onClick={()=> setTimer(1)}>Reset</button>
    </div>
  );
};

export default Timer;