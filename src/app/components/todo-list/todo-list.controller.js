// import actions from '../../actions/actions';
//
// export default class ExampleComponentController {
//   constructor($ngRedux) {
//     'ngInject';
//
//     /* bind dependencies */
//     this.$ngRedux = $ngRedux;
//
//     /* subscribe to redux */
//     this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, actions)(this);
//   }
//
//   /**
//    * @description Used by $ngRedux connect method to expose state changes.
//    * @param {object} state
//    * @returns {object}
//    */
// Which part of the Redux global state does our component want to receive?
// mapStateToThis(state) {
//     console.log('ВЫЗВАЛИ onStateChange');
//     console.log('state.todosExample = ', state.todosExample);
//     /* return will bind to controller context (this), exposed to view via $ctrl */
//     return {
//       todosFromState: state.todosExample,
//     };
//   }
//
//   $onDestroy() {
//     this.unsubscribe();
//   }
// }
