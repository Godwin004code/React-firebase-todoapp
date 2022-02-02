import React, { useState } from "react";
import { useNavigate } from "react-router";
import { logout, useAuth } from "./Firebase";
import FormContainer from "./FormContainer";
import FormList from "./FormList";
import { ButtonStyle } from "./Styles/Button.style";
import { HomeStyle } from "./Styles/Home.style";



const HomePage = () => {
    
    const [todoItem, setTodo] = useState([])
    const navigate = useNavigate()
    const current = useAuth()
    console.log(current);

    const onSetTodo = (todo, date) => {
        setTodo ((prev) => {
            
            return [...prev, {
                todo: todo,
                date: date
                
            }]
        })
    }
    
    async function signoutHandler() {
        try {
            await logout()
        } catch {
            alert("Can't log out")
        }
        navigate("/loginpage")
    }
    return (
        <>
        <HomeStyle>
            <div className="header">
        <h1>Modern Day Todo App</h1>
        <ButtonStyle>
        <button  onClick={signoutHandler}>Logout</button>
        </ButtonStyle>
        </div>
            <h2 style={{color: 'white'}}>welcome,<span> {current?.email}</span></h2>
            
            <FormContainer onAddedTodo={onSetTodo}  />
            
        
        
        </HomeStyle>
        </>
    )
}
export default HomePage