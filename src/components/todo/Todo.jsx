import React, { useState } from "react";
import TodoList from "./TodoList";
import { addTodoItem } from "../../redux/todo/todoSlice";
import { useDispatch } from "react-redux";

// Template string `hermelr ${value: ""}`
// id -> uniquely identify
function Todo() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const addTodo = () => {
    if (value.length > 0) {
      dispatch(addTodoItem(value));
      setValue("");
    } else {
      setError(true);
      alert("Please enter something!..");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#cccc",
      }}
    >
      <div
        style={{
          padding: "20px 40px",
          borderRadius: 2,
          background: "#ffff",
        }}
      >
        <input
          type="text"
          placeholder="Enter today item(s)"
          style={{
            outline: "none",
            // border: "1px solid #000",
            border: `1px solid ${error ? "red" : "#000"}`,
            padding: "10px 20px",
          }}
          onChange={(e) => {
            if (e.target.value.length > 2) {
              setError(false);
            }
            setValue(e.target.value);
          }}
          value={value}
        />
        <button
          style={{
            border: "1px solid #ccc",
            padding: 11,
            margin: "5px 0",
          }}
          onClick={addTodo}
        >
          Add
        </button>
        <TodoList />
      </div>
    </div>
  );
}

export default Todo;
