import React from 'react';
import TodoList from './todolist';

const List = ({list}) => {

    return(
        <div className="tdl" id="box" >
              {list.map((item) => (
                <TodoList
                item={item} 
                id={item.id}
                done={item.done}
                inputtitle={item.title} 
                inputdesc={item.desc}/>
              ))}             
        </div>
    );
};

export default List;