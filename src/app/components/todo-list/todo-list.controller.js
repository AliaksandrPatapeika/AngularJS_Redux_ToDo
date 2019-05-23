import actions from '../../actions/actions';

export default class ListController {
  constructor($ngRedux) {
    'ngInject';

    console.log('вошли в todo-list.controller');

    /* bind dependencies */
    this.$ngRedux = $ngRedux;

    this.unsubscribe = this.$ngRedux.connect(this.onStateChange, actions)(this);
  }

  onStateChange(state) {
    console.log('state.todosExample = ', state.todosExample);
    return {
      todosFromState: state.todosExample,
    };
  }

  $onDestroy() {
    this.unsubscribe();
  }
}
