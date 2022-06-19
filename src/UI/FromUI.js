import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import { createRef, useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { addToDo, hideForm } from "../Brain/Actions";

// ______IMPORTS

export const Form = () => {
  const [title, setTitle] = useState("");
  const [todo_author, setTodo_author] = useState("");

  const inpref = createRef();
  const selref = createRef();
  //
  const dispatch = useDispatch();

  const handle_todo_Title = (e) => {
    setTitle(e.target.value);
  };
  const Handle_todo_author = (e) => {
    setTodo_author(e.target.value);
  };

  const closeForm = (e) => {
    dispatch(hideForm(e));
  };

  const add_ToDo = (e) => {
    if (title !== "" && todo_author !== "") {
      dispatch(addToDo(e, title, todo_author));
    } else {
      alert("PLEASE ENTER TASK AND SELSECT AUTHOR.");
    }

    setTodo_author("");
    setTitle("");
  };
  // console.log(todo_author);

  return (
    <div className="form">
      <div className=" form_wrapper form_container">
        <TextField
          autoComplete="off"
          style={{ color: "#fff", margin: "0px 1rem " }}
          ref={inpref}
          type="text"
          variant="outlined"
          name="title"
          value={title}
          onChange={handle_todo_Title}
          label="Enter Your ToDo"
          color="primary"
        />
        <Select
          style={{ color: "#fff" }}
          ref={selref}
          value={todo_author}
          variant="outlined"
          onChange={Handle_todo_author}
          displayEmpty
          color="primary"
        >
          <MenuItem value="">Author</MenuItem>
          <MenuItem value="wajid">wajid</MenuItem>
          <MenuItem value="ali">ali</MenuItem>
          <MenuItem value="israr">israr</MenuItem>
        </Select>
      </div>
      <div className="form_wrapper btn_container ">
        <Button variant="contained" color="secondary" onClick={closeForm}>
          Close
        </Button>
        <Button
          className=""
          variant="contained"
          color="secondary"
          onClick={add_ToDo}
        >
          Add ToDo
        </Button>
      </div>
    </div>
  );
};
