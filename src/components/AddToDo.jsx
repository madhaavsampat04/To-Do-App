import { useState,useRef} from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


function AddToDo() {

  const {addNewItem}= useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();


  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    addNewItem(todoName, dueDate);  
  };

  return (
    <div className="container text-center">
      <form className="row kg-row"onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TO DO Here"
            ref={todoNameElement}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success kg-button"

          >
            <MdOutlineAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;




// const handleNameChange = (event) => {
//   setToDoName(event.target.value);
//   noOfUpdates.current+=1;

// };
// const handleDateChange = (event) => {
//   setDueDate(event.target.value);
//   console.log(`no of updates are ${noOfUpdates.current}`);
// };

// const handleAddButton = (event) => {
//   event.preventDefault();
//   onNewItem(todoName, dueDate);
//   setDueDate("");
//   setToDoName("");
// };

{/* <div class="container text-center">
<form class="row kg-row"onSubmit={handleAddButton}>
  <div class="col-6">
    <input
      type="text"
      placeholder="Enter TO DO Here"
      onChange={handleNameChange}
      value={todoName}
    ></input>
  </div>
  <div class="col-4">
    <input
      type="date"
      onChange={handleDateChange}
      value={dueDate}
    ></input>
  </div>
  <div class="col-2">
    <button
      type="submit"
      class="btn btn-success kg-button"

    > */}