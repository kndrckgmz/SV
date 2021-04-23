import React,{useEffect} from 'react';
import {db} from "./firebase_config";
import List from './tdlist';

const Form = ({list, setList, inputdesc,setInputDesc,inputtitle,setInputTitle,uid }) => {

    const titleinput = (e) => {
        setInputTitle(e.target.value);
    }

    const descinput = (e) => {
        setInputDesc(e.target.value);
    }

    useEffect(() => {
        db.collection(`${uid}-TodoList`).orderBy("done")
        .onSnapshot(function(querySnapshot){
            setList
            (querySnapshot.docs.map((i)=>({
                id:i.id,
                title:i.data().title,
                desc:i.data().desc,
                done:i.data().done,
            }))
            );
        });
    }, [list]); 

    const additem = () => {

        setInputTitle("");
        setInputDesc("");

        let title=document.getElementById("title").value;
        let desc=document.getElementById("desc").value;

        if (title!=""&&desc!="")
        {
            var x = document.getElementById("error");
            if (x.style.display = "block")
                {
                    x.style.display = "none";
                };

            db.collection(`${uid}-TodoList`).add({ 
                    title : inputtitle,
                    desc : inputdesc,
                    done : false,
            });

        }
        else
        {   
            var x = document.getElementById("error");
            x.style.display = "block";
            setTimeout(()=>{
                x.style.display = "none";
            }, 3000);
        }
    };

    return(
    <div>
        <p className="error" id="error">Please Enter all Details</p>
            <div className="todoform">
                <label className="todotext">ADD TODO ITEM</label>           
                <input value={inputtitle} onChange={titleinput} className="todoinput" type="text" placeholder="Title" id="title" required></input>
                <input value={inputdesc} onChange={descinput} className="todoinput" type="text" placeholder="Description" id="desc" required></input>
                <button className="todobtn" onClick={additem}>Add</button>
            </div>
    </div>
    );
};

export default Form;