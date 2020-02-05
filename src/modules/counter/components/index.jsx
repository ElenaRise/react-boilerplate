import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCounterDecrementAction, createCounterIncrementAction } from '../actions';

export function Counter() {
  const value = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(createCounterIncrementAction());
  };

  const handleDecrease = () => {
    dispatch(createCounterDecrementAction());
  };

  return (
    <div>
      <button onClick={handleDecrease} className="counter-decrement-button">
        Decrement
      </button>
      <div className="counter__value">
        { value }
      </div>
      <button onClick={handleIncrease} className="counter-increment-button">
        Increment
      </button>
    </div>
  );
}
