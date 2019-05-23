import { combineReducers } from 'redux';
import logger from 'redux-logger';
import example from './reducers/example.reducer';
import TodoExampleReducer from './reducers/todoExample.reducer';
import todoList from './reducers/todo.reducer';

export default function ($ngReduxProvider) {
  'ngInject';

  // combine reducers to create single global state
  const RootReducer = combineReducers({
    example,
    todosExample: TodoExampleReducer,
    todoList,
  });

  $ngReduxProvider.createStoreWith(
    RootReducer,
    [logger],
// eslint-disable-next-line no-underscore-dangle
    [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]);
}
