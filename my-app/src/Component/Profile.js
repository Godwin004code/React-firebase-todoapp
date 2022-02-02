import { useRef } from "react"

const Profile = () => {

    const usernameRef = useRef()
    return (
        <div>
            <input type="text" placeholder="username" ref={usernameRef}  />
            <button>Set Username</button>
        </div>
    )
}

export default Profile