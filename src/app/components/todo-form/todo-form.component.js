import controller from './todo-form.controller';
import template from './todo-form.component.html';

const todoForm = {
  template,
  controller,
  bindings: {
    formData: '<?',
    onSubmit: '&?',
  },
};

export default todoForm;
