const AddToDo = ({ addToDo }) => (
  <div>
    <input type="text" name="addToDo" />
    <input type="button" name="Add" value="Add" onClick={addToDo} />
  </div>
);

export default AddToDo;
