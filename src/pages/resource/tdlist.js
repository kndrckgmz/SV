import React from 'react';
import TodoList from './todolist';

const List = ({list, uid}) => {

    return(
        <div className="tdl" id="box" >
              {list.map((item) => (
                <TodoList
                item={item}
                key={item.id} 
                id={item.id}
                done={item.done}
                inputtitle={item.title} 
                inputdesc={item.desc}
                uid={uid}/>
              ))}             
        </div>
    );
};

export default List;