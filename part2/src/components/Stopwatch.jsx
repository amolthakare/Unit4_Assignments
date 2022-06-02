import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
// import { useRef } from 'react';

const Stopwatch = () => {
    const [watch, setWatch] = useState(0);
    // const [timerId, setTimerId] = useState(null);
    const timerId = useRef(null);

    const start = () => {
        console.log(timerId);
        if(!timerId.current){
            let id = setInterval(() => {
                setWatch((prev) => prev + 1);
            },300);
            // setTimerId(id);
            timerId.current = id;
        }
    };

    const pause = () => {
        clearInterval(timerId.current);
        // setTimerId(null);
        timerId.current=null;
    }

    const reset = () => {
        clearInterval(timerId);
        setWatch(0);
        timerId.current=null;
    };

    useEffect(() => {
        return reset;
    }, []);

  return (
    <div>
        <h2>Stopwatch:</h2>
        <h1>{watch}</h1>

        <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
        </div>

    </div>
  )
}

export default Stopwatch