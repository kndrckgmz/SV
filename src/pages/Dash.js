import React from 'react';
import WG from './resource/Weekgraph';
import Todo from './ToDo';
import Projects from './Projects';
import Api from './resource/apitest';

function Dash() {

    return (
        <div>
            <div className="box"><WG/><Api/></div>
            <div className="box"><Todo/></div>
            <div className="box"><Projects/></div>              
        </div>
        );
    }

export default Dash;