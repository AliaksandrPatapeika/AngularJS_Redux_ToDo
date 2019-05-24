import constants from '../app.constants';

const initialState = {
  todos: [
    {
      id: '5cb4774a4a61e2100001a714',
      text: 'learn AngularJS',
      done: true,
      important: false,
      description: 'learn AngularJS description...',
    },
    {
      id: '5cb4776a4a61e2100001a718',
      text: 'build an AngularJS app',
      done: false,
      important: false,
      description: 'build an AngularJS app description...',
    },
    {
      id: '5cb4705b4a61e2100001a662',
      text: 'Other task',
      done: false,
      important: true,
      description: 'Other task description...',
    },
  ],
  filterName: 'all',
};

export default function (state = initialState, action) {
  switch (action.type) {

    // case constants.ADD_TASK: {
    //   // TODO
    //   return [...state, action.payload];
    // }
    //
    // case constants.UPDATE_TASK: {
    //   // TODO
    //   const { id } = action.payload;
    //   return state.map(item => {
    //     if (item.id === id) {
    //       return {
    //         ...item,
    //         ...action.payload,
    //       };
    //     }
    //     return item;
    //   });
    // }

    case constants.DELETE_TASK: {
      // TODO
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
}
