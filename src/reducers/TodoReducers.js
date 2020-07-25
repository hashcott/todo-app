import { CREATE_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/type";
const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...state, { ...action.payload, isCompleted: false }];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id == action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id != action.id);
    default:
      return state;
  }
};
