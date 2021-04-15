import React,{useEffect, useState} from 'react';
import Main from "./Main";

  function Login() {

    const [user, User] = useState();

    useEffect(()=>{
      let a=sessionStorage.getItem("Username");
      let b=sessionStorage.getItem("Password");
    
      if (a=="name"&&b=="pass"){
        User(true);
      }
      else{
        return 0;
      }
    },[]);

  function check(){
    
    let u="name";
    let p="pass";
    let username;
    let password;
    let nameElement=document.getElementById("name");
    let passElement=document.getElementById("pass");
  
    if (nameElement != null && passElement != null) 
      {
        username = nameElement.value;
        password = passElement.value;
      }
    else 
      {
        username = null;
        password = null;
      }

    if (username==u && password == p)
      {
        User(true);
        sessionStorage.setItem("Username", username);
        sessionStorage.setItem("Password", password);      
      }
    else
      {
        var x = document.getElementById("error");
        x.style.display = "block";
        User(false);
      }
    return user;
  }

  function showpass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
      return (
        <div>
        {user ?
          (
            <Main/>        
          )
          :
          (
            <div className="App">              
              <div className="form">
              <div className="sv"></div>
                <p className="error" id="error">Invalid Login Credentials</p>             
                <input className="input" type="email" id="name" placeholder="Username" required></input>
                <input className="input" type="password" id="pass" placeholder="Password" required></input>
                <label className="check">Show Password
                <input className="checkbox1" type="checkbox" onClick={showpass}></input>
                </label>
                <button className="log" onClick={check}>Login</button>
              </div>  
            </div>
          )
        }
        </div>
  );

}

export default Login;