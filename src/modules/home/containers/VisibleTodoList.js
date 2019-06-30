import { connect } from 'react-redux';

import ToDoList from '../ToDoList';

const getVisibleTodos = todos => {
  return todos;
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos),
});

export default connect(mapStateToProps)(ToDoList);
