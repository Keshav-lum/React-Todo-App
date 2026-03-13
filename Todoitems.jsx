import { TodoItemContext } from "../store/todo-item-store.jsx";
import { useContext } from "react";
import Todoitem from "./Todoitem.jsx";
import style from './Todoitems.module.css'

function Todoitems(){


  const Contextobj= useContext(TodoItemContext);
  const todoitems=Contextobj.todoitem;
  const deleteitem=Contextobj.deleteitem;
 

    return(
<div className={style.itemContainer}>
  {todoitems.map((item)=>(
    <Todoitem
     todoname={item.todoname} 
     tododate={item.tododate}
     onDeleteClick={deleteitem}>
     </Todoitem>
  ))}
</div>
    )
}
export default Todoitems;