import { useState } from 'react'
import React from "react";
import { useEffect } from 'react';

const Timer = () => {

    const [timer, setTimer,start] = useState(0)

    useEffect (() => {
        const id = setInterval(() => {
            if(timer > 10){
                clearInterval(id);
            }
            else{
                setTimer(timer+1);
            }
        },1000);

        return () => {
            clearInterval(id);
        }

    },[timer])

  return (
    <div>
        Count Up: {timer}
        <button onClick={() => setTimer((timer) => timer + 1)}>+</button>
        <button onClick={() => setTimer((timer) => timer - 1)}>-</button>
        {/* <input type="text" placeholder='enter number' onClick={start} /> */}
    </div>
  )
}

export default Timer