import React,{useEffect, useState} from 'react';
import fire from "./pages/resource/firebase_config";
import Main from "./Main";
import SignIn from './pages/resource/SignIn';

  function Login() {

    const [user, setUser] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(true);

    const clearInputs = () =>{
      setEmail("");
      setPassword("");
    } 

    const clearErrors = () =>{
      setEmailError("");
      setPasswordError("");
    } 

    const handleLogin = () => {
      clearErrors();
      fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;  
        }
      });
    }

    const handleSignUp = () => {
      clearErrors();
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;  
        }
      });
    }

    const handleLogOut = () => {
      fire.auth().signOut();
    }


    const userListener = () => {
      fire.auth().onAuthStateChanged((user) =>{
        if(user)
        {
          clearInputs();
          setUser(user);
        }
        else
        {
          setUser(false);
        }
      });
    }

    useEffect(()=>{
      userListener();
    },[hasAccount]);
  
      return (
        <div>
        {user ?
          (
            <Main
            handleLogOut={handleLogOut}
            />        
          )
          :
          (
            <SignIn
            email={email}
            setEmail={setEmail}
            emailError={emailError}
            password={password}
            setPassword={setPassword}
            passwordError={passwordError}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            handleLogOut={handleLogOut}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}          
            />
          )
        }
        </div>
  );

}

export default Login;