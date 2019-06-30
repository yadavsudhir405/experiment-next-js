import { connect } from 'react-redux';

import ToDoList from '../ToDoList';
import { toggleTodo } from '../../../redux/action-creator';

const getVisibleTodos = (todos, filter) => {
  // console.log("****"+filter);
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => {
    dispatch(toggleTodo(id));
  },
});

const mapStateToProps = state => {
  console.log(JSON.stringify(state));
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);
