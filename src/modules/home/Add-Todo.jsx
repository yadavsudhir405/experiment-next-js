import { connect } from 'react-redux';
import { addTodo } from '../../redux/action-creator';

const AddToDo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input type="text" name="addToDo" ref={node => (input = node)} />
        <input type="submit" name="Add" value="Submit" />
      </form>
    </div>
  );
};

export default connect()(AddToDo);
