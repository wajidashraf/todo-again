import {
  ADD_FORM,
  ADD_TASK,
  CLOSE_FORM,
  COMPLETE_TASK,
  DELETE_COMPLETED_TASK,
  DELETE_QUERY,
  SEARCH_QUERY,
} from "../Brain/ActionTypes";

// ___IMPORTS_____

export const hideForm = (e) => {
  e.preventDefault();
  return { type: CLOSE_FORM };
};

export const showForm = (e) => {
  e.preventDefault();
  return {
    type: ADD_FORM,
  };
};

export const searchQuery = (e, query) => {
  e.preventDefault();
  console.log(query);
  return {
    type: SEARCH_QUERY,
    payload: query,
  };
};

export const deleteTask = (e) => {
  e.preventDefault();
  return {
    type: DELETE_QUERY,
    payload: e.target.id,
  };
};
export const delete_complete_Task = (e) => {
  e.preventDefault();
  return {
    type: DELETE_COMPLETED_TASK,
    payload: e.target.id,
  };
};
export const completeTask = (e, task) => {
  e.preventDefault();
  console.log(task);

  return {
    type: COMPLETE_TASK,
    payload: task,
  };
};

export const addToDo = (e, title, author) => {
  e.preventDefault();
  return {
    type: ADD_TASK,
    payload: {
      id: Math.random(0.4 * 0.9 - 0.2) + "A",
      title: title,
      completed: false,
      author: author,
    },
  };
};
