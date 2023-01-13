import React from 'react'
import { UseTodo } from '../../../context/TodoContext';
import ListItem from './ListItem';

function List() {

    const {todos}=UseTodo();

  return (
    


   
   <ul className="todo-list">

{
    todos.map((todo)=>(

    <ListItem key={todo.id} todo={todo}/>

     
     ))

}

</ul>
 
   


  )
}

export default List