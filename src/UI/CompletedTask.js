import React from "react";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_complete_Task } from "../Brain/Actions";
import ListRender from "./ListRender";

const CompletedTask = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("completed :>", todos.completedTask);

  const delete_Task = (e) => {
    dispatch(delete_complete_Task(e));
  };
  // const checked = true;

  return (
    <section className="todo_container">
      {todos.completedTask.length !== 0 ? (
        <Fragment>
          <h1 style={{ color: "green", textAlign: "center" }}>
            Completed Task
          </h1>
          <ul className="todo_list">
            {todos.completedTask.map((todo) => {
              return <ListRender chkd={true} todo={todo} del={delete_Task} />;
            })}
          </ul>
        </Fragment>
      ) : (
        <h1 className="center my-3 " style={{ fontSize: "1.5rem" }}>
          NO COMPLETED TASK FOUND
        </h1>
      )}
    </section>
  );
};

export default CompletedTask;
