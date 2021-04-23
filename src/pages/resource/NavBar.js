import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = ({handleLogOut}) => {

  function dark() {

    let theme = document.getElementById("dark").checked;
    if (theme==true){
      document.documentElement.style.setProperty('--darkblue', '#212535');
      document.documentElement.style.setProperty('--lightblue', '#303757');
      document.documentElement.style.setProperty('--accent', '#48caaf');
      document.documentElement.style.setProperty('--text1', '#d2d2d2');
    }

    else {
      document.documentElement.style.setProperty('--darkblue', '#d1d1d1');
      document.documentElement.style.setProperty('--lightblue', '#30375790');
      document.documentElement.style.setProperty('--accent', '#303757');
      document.documentElement.style.setProperty('--text1', '#1f1f1f');
    }
  }


      return (
        <nav className="nav">
          <div className="user">
          </div>
          
          <ul className="lists">
            <NavLink to="/Dash" className="list" >
              DASHBOARD
            </NavLink>

            <NavLink to="/Projects" className="list" >
              PROJECTS
            </NavLink>

            <NavLink to="/Att" className="list" >
              ZOOM
            </NavLink>

            <NavLink to="/Todo" className="list" >
              PLANNER
            </NavLink>
            
            <NavLink to="/Profile" className="list" >
              PROFILE
            </NavLink>
          </ul>
          
          <button className="logout" onClick={handleLogOut}>
            LOGOUT
          </button>

          <div className="container">
            <div className="check">Theme Toggle<sup className="beta">(Beta)</sup></div> 
              <input className="checkbox" type="checkbox" id="dark" defaultChecked="true" onClick={dark}/>
              <label htmlFor="dark" className="switch"></label>      
          </div>

        </nav>
        );
    };

export default Nav;