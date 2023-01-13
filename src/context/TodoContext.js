import { createContext,useContext,useState } from "react";
import {v4 as uuidv4} from "uuid"

const TodoContext=createContext();


export const TodoProvider=({children})=>{

const{todos,setTodos}=useState([{

id:1,
text:"react çalış",


}]);

const addTodo=(text)=>{

setTodos([...todos,{id:uuidv4(),text}])

}

const values={
    todos,
    setTodos,
    addTodo,
}


return <TodoContext.Provider value={values}>
{children}
</TodoContext.Provider>

}


export const UseTodo=()=>{

const context=useContext(TodoContext);

if (context===undefined) {
    
    throw new Error("provider tanımlanmamış")

}

return context

}


