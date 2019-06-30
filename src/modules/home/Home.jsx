import AddToDo from './Add-Todo';
import VisibleTodoList from './containers/VisibleTodoList';
import { createStore } from 'redux';
import todoApp from '../../../src/redux/reducers/todo-app';
import { Provider } from 'react-redux';

const store = createStore(todoApp);


const Home = () => (
  <Provider store={store}>
    <h1>This is Home page</h1>
    <ul>
      <li>A</li>
      <li>B</li>
    </ul>
    <AddToDo />
    <VisibleTodoList />
  </Provider>
);

export default Home;
