import actions from './action';

let nextId = 0;
const addTodo = text => ({
  type: actions.ADD_TODO,
  id: nextId++,
  text: text,
});

export { addTodo };
