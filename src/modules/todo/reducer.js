import { TODO_ADD } from './constants';

const initialState = {
  items: [
    'Вынести мусор',
    'Попылесосить',
    'Покушать',
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

    default:
      return state;
  }
}