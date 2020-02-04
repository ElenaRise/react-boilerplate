import { store } from '../../store';
import { addTodo } from './actions';

const todoInputNode = document.getElementById('todo-input');
const todoBtnAddNode = document.getElementById('todo-btn-add');
const todoRootNode = document.getElementById('todo-list-root');

function handleAddTodo() {
  const title = todoInputNode.value;
  const addTodoAction = addTodo(title);

  todoInputNode.value = '';

  store.dispatch(addTodoAction);
}

function renderTodoList() {
  const { todoReducer } = store.getState();
  const { items } = todoReducer;

  const listNode = document.createElement('ul');

  todoRootNode.innerHTML = '';

  items.forEach(item => {
    const itemNode = document.createElement('li');
    const itemButtonNode = document.createElement('button');

    itemButtonNode.innerText = 'X';
    itemNode.className = 'todo__list-item';
    itemButtonNode.className = 'todo__list-item-btn';

    itemNode.innerText = item.title;
    itemNode.appendChild(itemButtonNode);
    listNode.appendChild(itemNode);
  });

  todoRootNode.append(listNode);
}

renderTodoList();

store.subscribe(renderTodoList);

todoInputNode.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleAddTodo();
  }
});

todoBtnAddNode.addEventListener('click', handleAddTodo);
