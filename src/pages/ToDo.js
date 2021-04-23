import React, {useState, useEffect} from 'react';
import Form from './resource/tdform';
import List from "./resource/tdlist";
import fire from './resource/firebase_config';

const Todo = () => {

    const [inputtitle, setInputTitle] = useState('');
    const [inputdesc, setInputDesc] = useState('');
    const [list, setList] = useState([]);
    const [uid, setUid] = useState("");
    
    useEffect(() => {
      fire.auth().onAuthStateChanged((user)=>{
        let uid=user.uid;
        setUid(uid);
      });
    }, []);

    return (
        <div>           
            <Form
            list={list}
            setList={setList}            
            inputtitle={inputtitle} 
            setInputTitle={setInputTitle}
            inputdesc={inputdesc}
            setInputDesc={setInputDesc}
            uid={uid}/>

            <List
            list={list}
            uid={uid}/>
        </div>
        );
    };

export default Todo;