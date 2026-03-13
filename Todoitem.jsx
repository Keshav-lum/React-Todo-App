import { MdDelete } from "react-icons/md";

function Todoitem({todoname,tododate,onDeleteClick}){

return (
<div className="container">
    <div className="row kg-row">
    <div className="col-5">  {todoname} </div>
    <div className="col-4">{tododate}</div>
    <div className="col-2">
    <button type="button"
     className="btn btn-dark kg-button" 
     onClick={() => onDeleteClick(todoname)}><MdDelete/>Delete</button>
    </div>
  </div>
  </div>
);
}
export default Todoitem;