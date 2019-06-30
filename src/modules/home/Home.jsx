import { createStore } from 'redux';

import VisibleTodoList from './containers/VisibleTodoList';
import todoApp from '../../../src/redux/reducers/todo-app';
import { Provider } from 'react-redux';
import AddToDoContainer from './containers/AddToDoContainer';

const store = createStore(todoApp);

const Home = () => (
  <Provider store={store}>
    <h1>This is Home page</h1>
    <AddToDoContainer />
    <VisibleTodoList />
  </Provider>
);

export default Home;
