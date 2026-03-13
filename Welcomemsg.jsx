import { createContext, useContext } from "react";
import { TodoItemContext } from "../store/todo-item-store";
function Welcomemsg(){

     const {todoitem}=useContext(TodoItemContext)
     console.log("item",todoitem);

    return(
        
       todoitem.length === 0 && <p>thanks for coming</p>
    )
};
export default Welcomemsg;

