import controller from './todo-item.controller';
import template from './todo-item.component.html';

const todoItem = {
  template,
  controller,
  bindings: {
    // type todo = { description: string, author: string }
    todo: '<',
    onDelete: '&',
    onEdit: '&',
  },
};

export default todoItem;
