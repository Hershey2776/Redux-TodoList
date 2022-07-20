import React from "react";
import "./TodoItem.css";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setChange } from "../../features/todoSlice";

const TodoItem = ({ id, name, done }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setChange(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <p className={done ? "" : "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
