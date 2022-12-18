import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);

  if (todoList.length === 0) {
    return (
      <div>
        <span>No Todo found!...</span>
      </div>
    );
  }

  return (
    <>
      {todoList.map((item) => {
        return <TodoItem label={item.label} key={item.id} id={item.id} />;
      })}
    </>
  );
}

export default TodoList;
