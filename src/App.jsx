import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState,useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems,settodoItems] = useState([
  ]);

  const addNewItem = (itemName,itemDueDate) => {
  settodoItems((currValue) => [
    ...currValue, {name:itemName, dueDate:itemDueDate}
]); 
  }
  const deleteItem = (toDoItemName) => {
    const newTodoItems =todoItems.filter(item => item.name !== toDoItemName);
    settodoItems(newTodoItems);
  }


  return (
    <TodoItemsContext.Provider value={{todoItems,
      addNewItem,
      deleteItem,
    }}>
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <WelcomeMessage />
      <ToDoItems></ToDoItems>
    </center>
   </TodoItemsContext.Provider>
  );
}

export default App;
