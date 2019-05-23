import controller from './todo-item-example.controller';
import template from './todo-item-example.component.html';

const todoItemExample = {
  template,
  controller,
  bindings: {
    // type todo = { description: string, author: string }
    todo: '<',
    onDelete: '&',
    onEdit: '&',
  },
};

export default todoItemExample;
