const { CREATE_TODO, TOGGLE_TODO, DELETE_TODO } = require("./type");

export const createTodo = (id, body) => ({
  type: CREATE_TODO,
  payload: {
    id,
    body,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
