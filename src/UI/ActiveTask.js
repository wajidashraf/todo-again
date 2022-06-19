import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search } from "./Search";
import { completeTask, deleteTask } from "../Brain/Actions";
import ListRender from "./ListRender";
//
const ActiveTask = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const searchQuery = todos.searchQuery.toLowerCase();

  const delete_Task = (e) => {
    console.log("e.target.id");
    dispatch(deleteTask(e));
  };

  let task_Done = {};

  const completed__task = (id) => {
    todos.toDos.filter((todo) => {
      if (id === todo.id) {
        task_Done = { ...todo };
      }
    });
  };

  const checkBoxHandler = (e) => {
    completed__task(e.target.id);
    if (e.target.checked) {
      dispatch(deleteTask(e));
      setTimeout(() => {
        // console.log("Working");
        dispatch(completeTask(e, task_Done));
      }, 1000);
      // dispatch(deleteTask(e));
    }
  };

  // console.log(task_Done);
  return (
    <React.Fragment>
      {todos.toDos.length !== 0 && <Search />}
      <section className="todo_container">
        {todos.toDos.length !== 0 ? (
          <ul className="todo_list">
            {todos.toDos
              .filter((task) => {
                if (
                  task.title.toLowerCase().includes(searchQuery) ||
                  task.author.toLowerCase().includes(searchQuery)
                ) {
                  return task;
                }
              })
              .map((todo) => {
                return (
                  <ListRender
                    todo={todo}
                    del={delete_Task}
                    cbh={checkBoxHandler}
                  />
                );
              })}
          </ul>
        ) : (
          <h1 className="center my-3 " style={{ fontSize: "1.5rem" }}>
            Add NEW TASK
          </h1>
        )}
      </section>
    </React.Fragment>
  );
};

export default ActiveTask;
