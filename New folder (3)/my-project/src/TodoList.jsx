import React, { useRef, useState } from 'react'

const TodoList = () => {
    const [List, setList] = useState(["read", "write"]);
    const inputRef = useRef(null);
    const formSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value);
        if(inputRef.current.value)
        setList([...List, inputRef.current.value])
        inputRef.current.value = ""
    }
    const DeleteItem =(i)=>{
        const newList =List.filter((ele,ind)=>i!==ind)
        setList(newList)
    }
    const completed =(i)=>{
        const newList =List.filter((ele,ind)=>i!==ind)
        setList(newList)
    }
    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={formSubmit}>
                <input ref={inputRef}></input>
                <button type='submit'>Add</button>
            </form>
            <ul>
                {
                    List.map((ele, i) => {
                        return <li key={i}>{ele}<button onClick={()=>DeleteItem(i)}> del</button><button onClick={()=>completed(i)}>complete</button></li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;