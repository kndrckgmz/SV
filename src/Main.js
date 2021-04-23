import React, {useState, useEffect} from 'react';
import Dash from "./pages/Dash";
import Todo from "./pages/ToDo";
import At from "./pages/Att";
import Pro from "./pages/Porfile";
import Projects from "./pages/Projects";
import Nav from "./pages/resource/NavBar";
import Burger from "./pages/resource/Burger";
import { BrowserRouter as Router, Route} from "react-router-dom";



  const Main = ({handleLogOut}) => {  

    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    
    return (
    <div className="App">
      <Router>
      <Burger/>  
      <div className="main">
      
          <Nav
          handleLogOut={handleLogOut}
          />
             
            <div className='view'>
              <Route path="/Dash" component={Dash}/>
              <Route path="/Att" component={At}/>
              <Route path="/ToDo" component={Todo}/>             
              <Route path="/Profile" component={Pro}/>
              <Route path="/Projects" component={Projects}/>
            </div>
          
      </div>
      
      <div className="datetime">{date}/{month}/{year}</div>

      <div className="footer">
      Copyright - 2021 . SuperVisor
      </div>

      </Router>        
    
    </div>
  );
}

export default Main;