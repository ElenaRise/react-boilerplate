import { store } from '../../store';
import { addTodo } from './actions';

const todoRootNode = document.getElementById('todo-list-root');
const todoInputNode = document.getElementById('todo-input');
const todoBtnAddNode = document.getElementById('todo-btn-add');

todoInputNode.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    const title = todoInputNode.value;
    const addTodoAction = addTodo(title);

    store.dispatch(addTodoAction);
  }
});

todoBtnAddNode.addEventListener('click', () => {
  const title = todoInputNode.value;
  const addTodoAction = addTodo(title);

  store.dispatch(addTodoAction);
});

function renderTodoList() {
  const { todoReducer } = store.getState();
  const { items } = todoReducer;

  const listNode = document.createElement('ul');

  todoRootNode.innerHTML = '';

  items.forEach(item => {
    const itemNode = document.createElement('li');

    itemNode.innerText = item;
    listNode.appendChild(itemNode);
  });

  todoRootNode.append(listNode);
}

store.subscribe(renderTodoList);

renderTodoList();
