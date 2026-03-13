import AppName from './comonents/AppName'
import AddTodo  from './comonents/AddTodo'
import Todoitem from './comonents/Todoitem'
import Todoitems from './comonents/Todoitems'
import Welcomemsg from './comonents/welcomemsg'
import { useReducer, useState } from 'react'
import { useContext } from 'react'
import { TodoItemContext } from './store/todo-item-store'

const todoitemReducer=(currtodoitem, action)=>{

  let newtodoitem=currtodoitem;
if(action.type ==="newitem"){
  newtodoitem=[...currtodoitem,
     {todoname:action.payload.itemname,
      tododate:action.payload.itemdate}];
return newtodoitem;
     
}else if(action.type==="deleteitem"){
  newtodoitem=currtodoitem.filter(item=>item.todoname !==action.payload.itemname);
}
return newtodoitem;
}
// const newTodoitem=[...Todoitem,{todoname:itemname,tododate:itemdate}];
function App() {
// const[todoitem,settodoitem]=useState([]);
const [ todoitem, dispatchtodoitem]=useReducer(todoitemReducer,[]);

const addNewitem = (itemname, itemdate) => {
  dispatchtodoitem({
    type: "newitem",
    payload: {
      itemname,
      itemdate,
    }
  });
};

const deleteitem = (itemname) => {
    dispatchtodoitem({
    type: "deleteitem",
    payload: { itemname }
  });
};


 /* const newtodoitem=[...todoitem, {todoname:itemname, tododate:itemdate}];
  settodoitem(newtodoitem);*/
// const deleteitem=(itemname)=>{
//   const newtodoitems=todoitem.filter(item=> item.todoname !== itemname);
//   settodoitem(newtodoitems);
// };


  return (
  <TodoItemContext.Provider 
  value={{
   todoitem:todoitem,
    addNewitem: addNewitem,
    deleteitem: deleteitem,
  }}
  >
  <center className="todo-container">
<AppName/>
<AddTodo />
<Welcomemsg></Welcomemsg>
<Todoitems />
  </center>
  </TodoItemContext.Provider>
  );
}


export default App;
