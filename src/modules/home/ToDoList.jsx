const ToDoList = ({ todos }) => (
  <div>
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);

export default ToDoList;
