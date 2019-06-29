import PropTypes from 'prop-types';

const Todo = ({ addToDo, completed, text }) => (
  <div>
    <li onClick={addToDo}>{text}</li>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
