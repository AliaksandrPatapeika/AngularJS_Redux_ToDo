import controller from './todo-form-example.controller';
import template from './todo-form.component-example.html';

const todoFormExample = {
  template,
  controller,
  bindings: {
    formData: '<?',
    onSubmit: '&?',
  },
};

export default todoFormExample;
