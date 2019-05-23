import angular from 'angular';

import exampleComponent from './exampleComponent/exampleComponent.component';
// components
import todoForm from './todo-form/todo-form.component';
import todoList from './todo-list/todo-list.component';
import todoItem from './todo-item/todo-item.component';

export default angular.module('app.components', [])
    .component('exampleComponent', exampleComponent)
    .component('todoForm', todoForm)
    .component('todoList', todoList)
    .component('todoItem', todoItem)
    // остановился тут - добавляй свой todoList
.name;
