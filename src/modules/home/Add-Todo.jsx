import { addTodo } from '../../redux/action-creator';

let input;
const AddToDo = ({ dispatch }) => {
  return (
    <div>
      <input type="text" name="addToDo" ref={node => (input = node)} />
      <input
        type="button"
        name="Add"
        value="Submit"
        onClick={event => {
          event.preventDefault();
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      />
    </div>
  );
};

export default AddToDo;
