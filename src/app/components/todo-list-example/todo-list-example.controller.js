import actions from '../../actions/actions';

export default class ExampleListController {
  constructor($ngRedux) {
    'ngInject';

    /* bind dependencies */
    this.$ngRedux = $ngRedux;

    /* subscribe to redux */
    this.unsubscribe = this.$ngRedux.connect(this.onStateChange, actions)(this);
  }

  onStateChange(state) {
    return {
      todosFromState: state.todosExample,
    };
  }

  $onDestroy() {
    this.unsubscribe();
  }
}
