import React, {useState} from 'react';
import Form from './resource/tdform';
import List from "./resource/tdlist";

const Todo = () => {

    const [inputtitle, setInputTitle] = useState('');
    const [inputdesc, setInputDesc] = useState('');
    const [list, setList] = useState([]);

    return (
        <div>           
            <Form 
            setList={setList}
             
            inputtitle={inputtitle} 
            setInputTitle={setInputTitle}
            inputdesc={inputdesc}
            setInputDesc={setInputDesc}/>

            <List
            list={list}/>
        </div>
        );
    };

export default Todo;