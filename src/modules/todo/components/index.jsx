import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, setFilter } from '../actions';

export const Todo = () => {
  const todoReducer = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const { filter, items } = todoReducer;
  const trimmedValue = value.trim();

  const filteredItems = items.filter(item => (
    item.title.toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1
  ));

  const handleAddTodoItem = () => {
    if (trimmedValue !== '') {
      dispatch(addTodo(value));
      setValue('');
    }
  };

  const handleTodoTitleChange = event => {
    setValue(event.target.value);
  };

  const handleTodoTitleInputKeydown = event => {
    if (event.key === 'Enter') {
      handleAddTodoItem();
    }
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className="todo">
      <div className="todo__controls">
        <input
          className="todo__controls-input"
          placeholder="Please type in task"
          value={value}
          onChange={handleTodoTitleChange}
          onKeyDown={handleTodoTitleInputKeydown}
        />
        <input
          className="todo__controls-input"
          placeholder="Please type in filter"
          onChange={handleFilterChange}
        />
        <button
          className="todo__controls-btn"
          disabled={!trimmedValue}
          onClick={handleAddTodoItem}
        >
          Add
        </button>
      </div>
      <ul>
        { filteredItems.map(item => (
          <li className="todo__item" key={item.id}>
            { item.title }
            <button
              className="todo__list-item-btn"
              onClick={() => dispatch(removeTodo(item.id))}
            >
              X
            </button>
          </li>
        )) }
        { !!trimmedValue && (
          <li className="todo__item todo__item--preview">
            { trimmedValue }
          </li>
        ) }
      </ul>
    </div>
  );
};
