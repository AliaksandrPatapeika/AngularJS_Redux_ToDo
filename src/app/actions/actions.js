import constants from '../app.constants';

// для первого приложения
function updateExampleData(data) {
  console.log('Вызвали updateExampleData');
  return {
    type: constants.UPDATE_EXAMPLE_TEXT,
    payload: data,
  };
}

// для второго приложения
function createTodo(todoWithoutId) {
  return {
    type: constants.TODO_ADD,
    payload: todoWithoutId,
  };
}

function updateTodo(todo) {
  return {
    type: constants.TODO_UPDATE,
    payload: todo,
  };
}

function deleteTodo(todo) {
  return {
    type: constants.TODO_DELETE,
    payload: todo,
  };
}

// для моего приложения
function addTask(task) {
  return {
    type: constants.ADD_TASK,
    payload: task,
  };
}

function updateTask(task) {
  return {
    type: constants.UPDATE_TASK,
    payload: task,
  };
}

function deleteTask(task) {
  return {
    type: constants.DELETE_TASK,
    payload: task,
  };
}

export default {
  updateExampleData,
  createTodo,
  updateTodo,
  deleteTodo,
  // my actions
  addTask,
  updateTask,
  deleteTask,
};
