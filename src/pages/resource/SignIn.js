import React, {useEffect} from 'react';


const SignIn = ({
  email,
  setEmail,
  emailError,
  password,
  setPassword,
  passwordError,
  handleLogin,
  handleSignUp,
  hasAccount,
  setHasAccount }) => {

    useEffect(() => {
      let a=document.getElementById("signin");
      let b=document.getElementById("signup");
      if(hasAccount)
      {
        a.style.display="block";
        b.style.display="none";
      }
      else
      {
        a.style.display="none";
        b.style.display="block";
      }
    }, [hasAccount])


    function showpass() {
        var x = document.getElementById("pass");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    return (
    <div className="App">               
        <div className="form">
            <div className="sv"></div>            

            <div className="toplink" id="signin">Sign In</div>
            <div className="toplink" id="signup">Welcome To SuperVisor</div>

            <input className="input" type="email" id="name" placeholder="Username"
            required 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}></input>
            <p className="logerror" id="error">{emailError}</p> 

            <input className="input" type="password" id="pass" placeholder="Password"
            required
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}></input>
            <p className="logerror" id="error">{passwordError}</p>

            <label className="check">
              Show Password
            <input className="checkbox1" type="checkbox" onClick={showpass}></input>
            </label>
            
            <>
            {hasAccount ?
            (
              <>
              <button className="log" onClick={handleLogin}>Login</button>
              <label className="link">Don't Have an Account? -
              <label className="signinlink" onClick={()=>setHasAccount(!hasAccount)}> Sign Up Here!</label></label>
              </>
            ) 
            :
            (
              <>
              <button className="log" onClick={handleSignUp}>Sign UP</button>
              <label className="link">Have an Account? -
              <label className="signuplink" onClick={()=>setHasAccount(!hasAccount)}> Log In Here!</label></label>
              </>
            )
            }
            </>
                    
        </div>  
    </div>
    )
}

export default SignIn;