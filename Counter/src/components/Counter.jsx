import React, { useState } from "react";
import styles from "./styles.module.css";

const Count = () => {

    const [counter, setCounter] = useState(0);

    const HandleClick = (el) => {

        if(el.target.name == "double"){
            setCounter(counter*2);
        }
        else if(el.target.name == "plus"){
            setCounter(counter + 1);
        }
        else{
            setCounter(counter - 1);
        }
    }


  return (
    <div>
        <h1 className={counter % 2 ==0 ? styles.green : styles.red }>Count : {counter}</h1>
        <button onClick={HandleClick} name="plus">Increament</button>
        <button onClick={HandleClick} name="minus">Decreament</button>
        <button onClick={HandleClick} name="double">Double</button>
    </div>
  )
}

export default Count;