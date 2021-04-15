import React, {useState, useEffect} from 'react';
import Dash from "./pages/Dash";
import Todo from "./pages/ToDo";
import At from "./pages/Att";
import Pro from "./pages/Porfile";
import Projects from "./pages/Projects";
import Nav from "./pages/resource/NavBar";
import Burger from "./pages/resource/Burger";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";



  const Main = () => {  
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.getMonth()+1;

    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)

    }, [])

    return (
    <div className="App">

    {loading ?
      (
      <div className="middle">
      <div className="loader">Loading...</div>
      </div>
      )
      :
      ( 
      <Router>
      <Burger/>  
      <div className="main">
      
          <Nav/>
        
          <Switch>
            <div className='view'>
              <Route path="/Dash" component={Dash}/>
              <Route path="/Att" component={At}/>
              <Route path="/ToDo" component={Todo}/>             
              <Route path="/Profile" component={Pro}/>
              <Route path="/Projects" component={Projects}/>
            </div>
          </Switch>
          
      </div>
      
      <div className="datetime">{date}/{month}/{year}</div>

      <div className="footer">
      Copyright - 2021 . SuperVisor
      </div>

      </Router>    
    
      )    
    }
    </div>
  );
}

export default Main;