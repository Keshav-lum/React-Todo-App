import { useContext, useState } from "react";
import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemContext } from "../store/todo-item-store";

function AddTodo(){
  const[todoname, settodoname]=useState("")
  const[tododate,settododate]=useState("")
  const {addNewitem} = useContext(TodoItemContext) ;  // why curly barces used beacuse its make more short to code like it say i want a data from a object   insted of writting       const Contextobj = useContext(TodoItemContext);
                                                                                                                                                 //                                 const addNewitem = Contextobj.addNewitem;

                                                                                                                                                 //         we write short version          const { addNewitem } = useContext(TodoItemContext);   both are same
          
  const handleNameChange=(e)=>{
  settodoname(e.target.value);
  }
    const handleDateChange=(e)=>{
      settododate(e.target.value);
  }
const handlebuttononclicked=()=>{
  addNewitem(todoname,tododate);
settodoname("");
settododate("");
}
    return (
    <div className="container">
  <div className="row">
    <div className="col-5">
      <input type="text" 
     placeholder="enter Todo here"
     value={todoname}
     onChange={handleNameChange}/>
    </div>
    <div className="col-4">
      <input type="date"
      value={tododate}
      onChange={handleDateChange}/>
    </div>
    <div className="col-2">
      <button type="button"
       className="btn btn-success" 
       onClick={handlebuttononclicked}       
       ><BiMessageAdd/>Add</button>
    </div>
</div>
</div>
    );
}
export default AddTodo;