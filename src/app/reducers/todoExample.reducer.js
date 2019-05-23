import constants from '../app.constants';

const initialState = [
  {
    id: 0,
    description: 'Refactor UberDropdown',
    creator: 'Mo Kweon',
  },
  {
    id: 1,
    description: 'Update AngularJS',
    creator: 'Mo Kweon',
  },
];

export default function (state = initialState, action) {
  switch (action.type) {

    case constants.TODO_ADD: {
      const id = Date.now();
      const todoItem = {
        id,
        ...action.payload,
      };
      return [...state, todoItem];
      // return [...state, action.payload];
    }

    case constants.TODO_DELETE: {
      const { id } = action.payload;
      return state.filter(item => item.id !== id);
      // return [
      //   ...state.slice(0, action.payload),
      //   ...state.slice(action.payload + 1)
      // ]
    }

    case constants.TODO_UPDATE: {
      const { id } = action.payload;
      return state.map(item => {
        if (item.id === id) {
          return {
            ...item,
            ...action.payload,
          };
        }
        return item;
      });
    }

    default:
      return state;
  }
}
