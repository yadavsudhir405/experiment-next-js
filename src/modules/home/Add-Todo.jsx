import { addTodo } from '../../redux/action-creator';

let input;
const AddToDo = (props) => {
  return (
    <div>
      <input type="text" name="addToDo" ref={(node => (input = node))} />
      <input
        type="button"
        name="Add"
        value="Submit"
        onClick={event => {
          event.preventDefault();
          props.dispatch(addTodo(input.value));
          input.value = '';
        }}
      />
    </div>
  );
};

export default AddToDo;
