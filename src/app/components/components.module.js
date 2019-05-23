import angular from 'angular';

import exampleComponent from './exampleComponent/exampleComponent.component';
// components
import todoFormExample from './todo-form-example/todo-form-example.component';
import todoListExample from './todo-list-example/todo-list-example.component';
import todoItemExample from './todo-item-example/todo-item-example.component';
// мой todoList
import todoList from './todo-list/todo-list.component';
import headContainer from './head-container/head-container.component';

export default angular.module('app.components', [])
  // examples
  .component('exampleComponent', exampleComponent)
  .component('todoFormExample', todoFormExample)
  .component('todoListExample', todoListExample)
  .component('todoItemExample', todoItemExample)
  // мой todoList
  .component('todoList', todoList)
  .component('headContainer', headContainer)
  .name;
