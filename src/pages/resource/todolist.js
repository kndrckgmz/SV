import React from 'react';
import {db} from "./firebase_config";

const TodoList = ({inputtitle, inputdesc, item, done, id, uid }) => {

    const deleteTodo = () => {
        db.collection(`${uid}-TodoList`).doc(id).delete();
    };

    const completedTodo = () => {
        db.collection(`${uid}-TodoList`).doc(id).update({
            done:!done,
        });
    };

    return(
        <div className="listcontainer">
            <div className={`listtitle ${item.done ? "done" : ""}`}>{inputtitle}</div>
            <div className={`listdesc  ${item.done ? "done" : ""}`}>{inputdesc}</div>
            <div className="todobtns">
            <button onClick={completedTodo} className={`btn  ${item.done ? "donebtn" : ""}`}>Done</button>
            <button onClick={deleteTodo} className="btn">Clear</button> 
            </div>
        </div>
    );
};

export default TodoList;