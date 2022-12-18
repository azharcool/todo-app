import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoItem } from "../../redux/todo/todoSlice";
function TodoItem(props) {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(deleteTodoItem(props.id));
  };
  return (
    <div
      style={{
        background: "#ccc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 5,
        marginBottom: 5,
        marginTop: 1,
      }}
    >
      <label>{props.label}</label>
      <div>
        <button
          style={{
            border: "1px solid #ccc",
            padding: 11,
            // margin: 5,
            color: "green",
          }}
        >
          Edit
        </button>
        <button
          style={{
            border: "1px solid #ccc",
            padding: 11,
            // margin: 5,
            color: "red",
          }}
          onClick={remove}
        >
          Del
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
