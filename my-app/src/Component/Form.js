import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import FormList from "./FormList";


const getTodo = () => {
    const data = localStorage.getItem('Todo')

    if(data) {
        return JSON.parse(data)
    } else {
        return []
    }
}

const FormItem = (props) => {
    const [enteredTodo, setEnteredTodo] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [todo, setTodo] = useState(getTodo())

    const todoHandler = (e) => {
        setEnteredTodo(e.target.value)
    }

    const dateHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const date = new Date()
        const time = date.getTime()

        const todoData = {
            
            todo: enteredTodo,
            date: enteredDate
        }
        const todoObject = {
            ID: time,
            TodoValue: enteredTodo,
            TodoDate: enteredDate
        }
        props.onAddTodo(todoData);
        //props.closeModal()

        setTodo([...todo, todoObject])

        setEnteredDate('')
        setEnteredTodo('')
    }

    useEffect(() => {
        localStorage.setItem('Todo', JSON.stringify(todo))
    }, [todo])


    const handleDelete = (id) => {
        const filtered = todo.filter((tod) => {
            return tod.ID !== id
        })

        setTodo(filtered)
    }

    return(
        <>
        
        
        <form className="form" onSubmit={submitHandler}>
            <p style={{marginBottom: '3rem'}}>
            <label htmlFor="todo">Todo</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={enteredTodo}
                onChange={todoHandler}
            />
            </p>
            <p>
                <label htmlFor="date">Date</label>
            <input 
                type="date"
                value={enteredDate}
                onChange={dateHandler}
            />
            </p>
            <button className="add-btn">Add Todo</button>

            {

                
                todo.map((eachTodo, idx) => (
                    
                        <FormList item={eachTodo} key={idx} deleteTodo={() => handleDelete(eachTodo.ID)}  />
                    
                ))
            }
        </form>
        </>
    )
}

export default FormItem