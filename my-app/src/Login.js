import React, {useState} from "react"

function Login({users, onLogin}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        onLogin(username, password)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" value={username} placeholder="Enter Username" name="uname"></input>
                <label htmlFor="psw"><b>Password</b></label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter Password" name="psw"></input>
                <button type="submit">Login</button>
            </div>
        </form>
        
    )
}



export default Login;