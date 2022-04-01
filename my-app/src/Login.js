import React, {useState} from "react"
import { useHistory } from "react-router-dom";

function Login({users, onLogin}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault()
        onLogin(username, password)
        setUsername("")
        setPassword("")
        history.push('/shopping-cart')
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="con">
                <label htmlFor="uname"><b>Username</b></label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" value={username} placeholder="Enter Username" name="uname"></input>
                <label htmlFor="psw"><b>Password</b></label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter Password" name="psw"></input>
                <button className="log-in" type="submit">Login</button>
            </div>
        </form>
    )
}

/* <div class="overlay">
<!--  LOGN IN FORM by Omar Dsoky -->
<form onSubmit={handleSubmit}>
   <!--   con = Container  for items in the form-->
   <div class="con">
   <!--     Start  header Content  -->
   <header class="head-form">
      <h2>Log In</h2>
      <!--     A welcome message or an explanation of the login form -->
      <p>login here using your username and password</p>
   </header>
   <!--     End  header Content  -->
   <br>
   <div class="field-set">
     
      <!--   user name -->
         <span class="input-item">
           <i class="fa fa-user-circle"></i>
         </span>
        <!--   user name Input-->
         <input class="form-input" id="txt-input" type="text" placeholder="@UserName" required>
     
      <br>
     
           <!--   Password -->
     
      <span class="input-item">
        <i class="fa fa-key"></i>
       </span>
      <!--   Password Input-->
      <input class="form-input" type="password" placeholder="Password" id="pwd"  name="password" required>
     
<!--      Show/hide password  -->
     <span>
        <i class="fa fa-eye" aria-hidden="true"  type="button" id="eye"></i>
     </span>
     
     
      <br>
<!--        buttons -->
<!--      button LogIn -->
      <button class="log-in"> Log In </button>
   </div>
  
<!--   other buttons -->

<!--      End Other the Division -->
   </div>
     
<!--   End Conrainer  -->
  </div>
  
  <!-- End Form -->
</form>
</div> */

export default Login;