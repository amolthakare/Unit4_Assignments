import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import style from "../components/stopwatch.module.css"
// import { useRef } from 'react';

const Stopwatch = (props) => {
    const [watch, setWatch] = useState(0);
    // const [timerId, setTimerId] = useState(null);
    const timerId = useRef(null);

    const start = () => {
        console.log(timerId);
        if(!timerId.current){
            let id = setInterval(() => {
                setWatch((prev) => prev + 1);
            },1000);
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
    <div >
        <h2>Stopwatch:</h2>
            {/* <span>{(props.time.h >=10)? props.time.h: "0"+ props.time.h}</span> */}
        <h1 className={style.hh1}>{watch}</h1>

        <div className={style.divi}>
        <button onClick={start} className={style.ab}>Start</button>
        <button onClick={pause} className={style.pause}>Pause</button>
        <button onClick={reset} className={style.reset}>Reset</button>
        </div>

    </div>
  )
}

export default Stopwatch