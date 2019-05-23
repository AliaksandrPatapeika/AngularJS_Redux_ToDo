import actions from '../../actions/actions';

export default class ExampleListController {
  constructor($ngRedux) {
    'ngInject';

    /* bind dependencies */
    this.$ngRedux = $ngRedux;

    /* subscribe to redux */
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, actions)(this);
  }

// Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    return {
      todosFromState: state.todosExample,
    };
  }

  $onDestroy() {
    this.unsubscribe();
  }
}
