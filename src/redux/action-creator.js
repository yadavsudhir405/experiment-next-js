import actions from './action';

let nextId = 0;
const addTodo = text => ({
  type: actions.ADD_TODO,
  id: nextId++,
  text: text,
});

const toggleTodo = (id) => ({
  type: actions.TOGGLE_TODO,
  index: id,
});

const setVisibilityFilter = (visibilityFilter) => ({
  type: actions.SET_VISIBILITY_FILTER,
  filter: visibilityFilter,
});

export { addTodo, toggleTodo, setVisibilityFilter };
