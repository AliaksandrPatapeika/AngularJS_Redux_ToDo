import actions from '../../actions/actions';

export default class headContainerController {
  constructor($ngRedux) {
    'ngInject';

    /* bind dependencies */
    this.$ngRedux = $ngRedux;

    /* subscribe to redux */
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, actions)(this);

    /* set properties */
    this.taskLength = this.todos.length;
    this.remainingTasks = this.todos.filter(task => !task.done).length;
    this.doneTasks = this.taskLength - this.remainingTasks;
  }

// Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    /* return will bind to controller context (this), exposed to view via $ctrl */
    return {
      todos: state.todoList.todos,
    };
  }

  archiveCompletedTasks() {
    console.log('archiveCompletedTasks');
  }

  $onDestroy() {
    this.unsubscribe();
  }
}
