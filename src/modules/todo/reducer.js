import { TODO_ADD, TODO_REMOVE } from './constants';

const initialState = {
  items: [
    { id: 1, title: 'Вынести мусор' },
    { id: 2, title: 'Попылесосить' },
    { id: 3, title: 'Покушать' },
  ],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload.title,
        ],
      };

    case TODO_REMOVE: {
      const newItems = state.items.filter(item => item.id !== action.payload.id);

      return {
        ...state.items,
        items: newItems,
      };
    }

    default:
      return state;
  }
}
