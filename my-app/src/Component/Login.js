import { useRef } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { Login } from "./Firebase"
import { SignUpStyle } from "./Styles/SignUp.style"
import LoginImg from "./todo-img/121845190-to-do-list-business-education-and-success-background.webp"

const LoginPage = () => {

    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()

    async function signinHandler() {
        try {
            await Login(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert("Can't log in")
        }

        navigate("/homepage")
    }

    return (
        <SignUpStyle>
            <div className="form">
            <h2>Sign In</h2>
            <p>
                <label htmlFor="email">Email</label>
                <input type="email" ref={emailRef} placeholder="email" id="email" />
            </p>
            <p>
                <label htmlFor="pwd">Password</label>
                <input type="password" ref={passwordRef} placeholder="password" id="pwd" />
            </p>
            <button onClick={signinHandler}>LogIn</button>
            <div className="option-tab">
                Don't have an account? <Link className="Link" to="/">SignUp</Link>
            </div>
        </div>
        <div>
            <img src={LoginImg} alt="Pic is here" />
        </div>
        </SignUpStyle>
    )
}

export default LoginPage