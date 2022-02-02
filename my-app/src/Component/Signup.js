
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signUp } from "./Firebase2"
import Profile from "./Profile"
import { SignUpStyle } from "./Styles/SignUp.style"
import SignUpImg from "./todo-img/istockphoto-1285308242-170667a.jpg"

const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

    const navigate = useNavigate()
    async function signupHandler () {
        try {
            await signUp(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert('Error.. cant log in')
        }
         
        navigate("/loginpage")
        
    }

    return (
        <SignUpStyle>
            <div className="form">
                <h2>Register with us</h2>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" ref={emailRef} placeholder="email" id="email" />
                </p>
                <p>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" ref={passwordRef} placeholder="password" id="pwd" />
                </p>
               
                <button onClick={signupHandler}>SignUp</button>
                <div className="option-tab">
                    Already have an account? <Link className="Link" to="/loginpage">LogIn</Link>
                </div>
            </div>
            <div>
                <img src={SignUpImg} alt="Img here" />
            </div>
        </SignUpStyle>
    ) 
}

export default SignUp