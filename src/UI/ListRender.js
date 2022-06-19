import { Checkbox } from "@material-ui/core";
import React from "react";
import { Delete } from "@material-ui/icons";
const ListRender = (props) => {
  console.log(props.todo);
  return (
    <li className="todo" key={props.todo.id}>
      <span className="isCompleted">
        <Checkbox
          onChange={props.cbh}
          id={props.todo.id}
          checked={props.chkd}
        />
      </span>
      {props.todo.title}
      <span className="author">{props.todo.author}</span>
      <span className="delete" id={props.todo.id} onClick={props.del}>
        &times;
      </span>
    </li>
  );
};

export default ListRender;
