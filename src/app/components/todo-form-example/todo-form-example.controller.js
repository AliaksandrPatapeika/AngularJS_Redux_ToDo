import actions from '../../actions/actions';

const cleanForm = {
  description: '',
  creator: '',
};

export default class ExampleFormController {
  constructor($ngRedux) {
    'ngInject';

    console.log('вошли в ExampleFormController');

    /* bind dependencies */
    this.$ngRedux = $ngRedux;

    this.unsubscribe = this.$ngRedux.connect(null, actions)(this);
  }

  $onInit() {
    this.formData = { ...this.formData } || cleanForm;
  }

  onFormSubmit($event) {
    $event.preventDefault();
    console.log('FORM DATA = ', this.formData);

    // if onSubmit is given from the parent
    // редактируем туду
    if (this.onSubmit) {
      console.log('IIIIIFFFFFFFFF');
      this.onSubmit({ formData: this.formData });
    } else {
      // создаем новое туду
      console.log('EEEELLSLLSSEEEEEE');
      // default action is `create`
      this.createTodo(this.formData);
    }

    // clean form
    this.formData = { ...cleanForm };
  }

  $onDestroy() {
    this.unsubscribe();
  }
}
