import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
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
        <Button
          className="todo__controls-btn"
          variant="contained"
          disabled={!trimmedValue}
          color="primary"
          endIcon={<Icon>add</Icon>}
          onClick={handleAddTodoItem}
        >
          Add
        </Button>
      </div>
      <ul>
        { filteredItems.map(item => (
          <li className="todo__item" key={item.id}>
            { item.title }
            <IconButton
              onClick={() => { dispatch(removeTodo(item.id)); }}
            >
              <Icon>delete</Icon>
            </IconButton>
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
