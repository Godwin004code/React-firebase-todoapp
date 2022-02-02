import React, { useState } from "react";  
import { FaTimes } from "react-icons/fa";
import FormItem from "./Form";
import "./Styles/Formcontainer.style.css"

const FormContainer = (props) => {
    const [showForm, setShowForm] = useState(false)

    const addedTodo = (prevTodo) => {
        const todoData = {
            ...prevTodo
        }
        props.onAddedTodo(todoData);
        //setShowForm(false)
    }

    const modalHandler = (props) => {
        console.log();
        setShowForm(showForm ? false : true)
    }

    return (
        <div>
            <div className="show-form-btn"  >
            <button onClick={modalHandler}>Show Form </button>
            </div>
            {/* <div className="remove-form" onClick={props.removeForm} >
            <FaTimes />
            </div> */}
            <div className={showForm ? "form-container show-modal" : "form-container"}>
            <FormItem onAddTodo={addedTodo} />
            </div>
            
        </div>
    )
}
export default FormContainer