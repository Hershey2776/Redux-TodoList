import React from "react";
import "./App.css";
import Input from "./Component/Input/Input";
import TodoItem from "./Component/TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">
          {todoList.map((data) => (
            <TodoItem name={data.item} done={data.done} id={data.id} />
          ))}
        </div>
      </div>
      <Input />
    </div>
  );
}

export default App;
