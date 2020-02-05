import { store } from '../../store';
import { addTodo, removeTodo, setFilter } from './actions';

const todoTaskInputNode = document.getElementById('todo-task-input');
const todoFilterInputNode = document.getElementById('todo-filter-input');
const todoBtnAddNode = document.getElementById('todo-btn-add');
const todoRootNode = document.getElementById('todo-list-root');

function handleAddTodo() {
  const { value } = todoTaskInputNode;
  const addTodoAction = addTodo(value);

  todoTaskInputNode.value = '';

  store.dispatch(addTodoAction);
}

function handleFilterChange() {
  const { value } = todoFilterInputNode;

  store.dispatch(setFilter(value));
}

function renderTodoList() {
  const { todoReducer } = store.getState();
  const { filter, items } = todoReducer;

  const listNode = document.createElement('ul');

  const filteredItems = filter
    ? items.filter(({ title }) => title.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    : items;

  todoRootNode.innerHTML = '';

  filteredItems.forEach(item => {
    const itemNode = document.createElement('li');
    const itemButtonNode = document.createElement('button');

    itemButtonNode.innerText = 'X';
    itemNode.className = 'todo__list-item';
    itemButtonNode.className = 'todo__list-item-btn';

    itemNode.innerText = item.title;
    itemNode.appendChild(itemButtonNode);
    listNode.appendChild(itemNode);

    itemButtonNode.addEventListener('click', () => {
      store.dispatch(removeTodo(item.id));
    });
  });

  todoRootNode.append(listNode);
}

renderTodoList();

store.subscribe(renderTodoList);

todoTaskInputNode.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleAddTodo();
  }
});

todoFilterInputNode.addEventListener('input', handleFilterChange);

todoBtnAddNode.addEventListener('click', handleAddTodo);
