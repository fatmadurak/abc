import { createContext,useContext,useState } from "react";

const TodoContext=createContext();


export const TodoProvider=({children})=>{

const{todos,setTodos}=useState([]);

const values={
    todos,
    setTodos,
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


