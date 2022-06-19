import {
  ADD_FORM,
  ADD_TASK,
  CLOSE_FORM,
  COMPLETE_TASK,
  DELETE_COMPLETED_TASK,
  DELETE_QUERY,
  SEARCH_QUERY,
} from "./ActionTypes";

const initialState = {
  toDos: [],
  completedTask: [],
  searchQuery: "",
  show: false,
  deleteQuery: null,
  // completed: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // action.type     action.payload
  console.log(payload);

  if (type === CLOSE_FORM || type === ADD_FORM) {
    return {
      ...state,
      show: !state.show,
    };
  }
  //

  if (type === ADD_TASK) {
    return {
      ...state,
      toDos: [payload, ...state.toDos],
    };
  }
  if (type === SEARCH_QUERY) {
    return {
      ...state,
      searchQuery: payload,
    };
  }

  if (type === DELETE_QUERY) {
    return {
      ...state,

      toDos: state.toDos.filter((todo) => {
        if (todo.id !== payload) {
          return todo;
        }
      }),
    };
  }

  if (type === DELETE_COMPLETED_TASK) {
    return {
      ...state,

      completedTask: state.completedTask.filter((todo) => {
        if (todo.id !== payload) {
          return todo;
        }
      }),
    };
  }

  if (type === COMPLETE_TASK) {
    return {
      ...state,
      completedTask: [payload, ...state.completedTask],
    };
  }

  return state;
};
export default reducer;
