import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import ToDoItem from "./TodoItem"



function ToDoItems() {
  const {todoItems}= useContext(TodoItemsContext);
  const {deleteItem}= useContext(TodoItemsContext);
  

 
  return <div className="items-container">
        {todoItems.map(item => <ToDoItem todoname={item.name} key={item.name}
        tododate={item.dueDate} ></ToDoItem>
        )}
        
      </div>
  
}

export default ToDoItems;