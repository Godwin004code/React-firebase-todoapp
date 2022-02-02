import React from "react";
import { GlobalStyle } from "./App.styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from "./Component/Signup";
import Login from "./Component/Login";
import HomePage from "./Component/HomePage";

const App = () => {
    

    return (
         <Router>
        <div>
            <GlobalStyle />
            <Routes>
                <Route path="/" exact element={<SignUp />} />
                <Route path="loginpage" element={<Login />} />
                <Route path="/homepage" element={<HomePage />} />
            </Routes>
        </div>
        </Router>
    )
}

export default App