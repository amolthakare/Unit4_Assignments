import React,{useState} from 'react'
import styles from "./todo.module.css";

const Todo = (todo) => {


    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [completed, setCompleted] = useState(todo.completed);
    
    // const addItem= () =>{
    //     if(!inputData){

    //     }
    //     else{
    //         setItems([...items,inputData,{completed:false}]);
    //         setInputData('');
    //     }
    // }

    const handleChange = (e) => {
        setInputData(e.target.value);
      }


    // const deleteItem = (id) => {
    //     const updateeditems = items.filter((elem,ind) => {
    //         return ind !==id;
    //     });
    //     setItems(updateeditems)
    // }
    const deleteItem = (id) => {
        let newTodos = items.filter(todo => todo.id !== id);
        setItems(newTodos);
      }
    const remove =()=>{
        setItems([]);
    }

  return (
    <div>
        <h1>Todo List</h1>
        <div className='addItems'>

            <input className='input' type="text" placeholder="Add Items..."  value={inputData}
                onChange={handleChange}
            ></input>

            <button className='addBtn' 
                onClick={() => {
                    setItems([
                      ...items,
                      { id: Date.now(), value: inputData, isComplete: false }
                    ]);
                    setInputData("");
                  }}
                
            >+
            </button>

        </div>
        <div className='outer'>
            {
                items.map((todo)=>{

                    return(

                        <div className='inner'>

             {/* checkbox */}
                            <input checked={completed}
                            onChange={(el) => {
                            setCompleted(el.target.checked);
                            }}
                            className='checkbox'
                            type='checkbox'>
                            </input>

             {/* todo list */}
                            <h3 className={completed ? styles.striked : ""}>{todo.value}</h3>

             {/* remove */}
                            <button className='remove' 
                                onClick={()=> deleteItem(todo.id)}>Remove
                            </button>
                        </div>
                    )
                })
            }
            
        </div>
        <div>
            <button className='btn' onClick={remove}><span>Remove All</span></button>
        </div>
    </div>
  )
}

export default Todo