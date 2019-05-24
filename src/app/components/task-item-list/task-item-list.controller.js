// import actions from '../../actions/actions';

export default class taskItemListController {
  // constructor($ngRedux) {
  constructor() {
    'ngInject';

    /* bind dependencies */
    // this.$ngRedux = $ngRedux;

    /* subscribe to redux */
    // this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);

    /* set properties */
    // this.remainingTasks = this.todos.filter(task => !task.done).length;
    // this.doneTasks = this.todos.length - this.remainingTasks;
  }

// // Which part of the Redux global state does our component want to receive?
//   mapStateToThis(state) {
//     /* return will bind to controller context (this), exposed to view via $ctrl */
//     return {
//       todos: state.todoList.todos,
//     };
//   }

  // $onDestroy() {
  //   this.unsubscribe();
  // }
}
