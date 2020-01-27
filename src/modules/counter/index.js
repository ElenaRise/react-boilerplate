import { store } from '../../store';
import { createCounterIncrementAction, createCounterDecrementAction } from './actions';

const counterValue = document.getElementById('counter');
const counterIncrementBtnNode = document.getElementById('counter-increment-btn');
const counterDecrementBtnNode = document.getElementById('counter-decrement-btn');

store.subscribe(() => {
  const { counterReducer } = store.getState();

  counterValue.innerText = counterReducer;
});

counterIncrementBtnNode.addEventListener('click', () => {
  store.dispatch(createCounterIncrementAction());
});

counterDecrementBtnNode.addEventListener('click', () => {
  store.dispatch(createCounterDecrementAction());
});
