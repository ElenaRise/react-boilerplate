import { TODO_ADD, TODO_REMOVE, TODO_SET_FILTER } from './constants';

const initialState = {
  filter: '',
  items: [
    { id: Date.now() + Math.random(), title: 'Вынести мусор' },
    { id: Date.now() + Math.random(), title: 'Попылесосить' },
    { id: Date.now() + Math.random(), title: 'Покушать' },
  ],
};

export function todoReducer(state = initialState, { type, payload }) {
  const { items } = state;

  switch (type) {
    case TODO_ADD:
      return {
        ...state,
        items: [
          ...items,
          payload,
        ],
      };

    case TODO_REMOVE: {
      const newItems = items.filter(item => item.id !== payload.id);

      return {
        ...state.items,
        items: newItems,
      };
    }

    case TODO_SET_FILTER:
      return {
        ...state,
        filter: payload.value,
      };

    default:
      return state;
  }
}
