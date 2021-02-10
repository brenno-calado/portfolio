function createHeader() {
  createHTMLElement('body', 'header');
  createHTMLElement('header', 'h1', undefined, 'Minha Lista de Tarefas');
  createHTMLElement('header', 'p', 'funcionamento', 'Clique duas vezes em um item para marcá-lo como completo');
}

function createMain() {
  createHTMLElement('body', 'main');
  createHTMLElement('main', 'input', 'texto-tarefa');
  createHTMLElement('main', 'button', 'criar-tarefa', 'adicionar tarefa');
  createHTMLElement('main', 'ol', 'lista-tarefa');
  createHTMLElement('main', 'button', 'apaga-tudo', 'Limpar Lista');
  createHTMLElement('main', 'button', 'remover-finalizados', 'Remover finalizados');
  createHTMLElement('main', 'button', 'salvar-tarefas', 'salvar tarefas');
  createHTMLElement('main', 'button', 'mover-baixo', 'Down');
  createHTMLElement('main', 'button', 'mover-cima', 'Up');
  createHTMLElement('main', 'button', 'remover-selecionado', 'Remover selecionado');
}

const createHTMLElement = (parent, element, id, text) => {
  const htmlElement = document.createElement(element);
  if (id !== undefined) htmlElement.id = id;
  if (text !== undefined) htmlElement.innerText = text;
  const parente = document.querySelector(parent);
  parente.appendChild(htmlElement);
};

function retrieveLocalStorage() {
  const orderedList = document.querySelector('ol');
  const retrievedList = JSON.parse(localStorage.getItem('tasks'));
  const retrievedListStatus = JSON.parse(localStorage.getItem('completed'));
  if (retrievedList === null) return console.log('empty localStorage');
  retrievedList.forEach((retrieved, index) => {
    const listItem = document.createElement('li');
    listItem.innerText = retrieved;
    if (retrievedListStatus[index] !== 'false') {
      listItem.classList.add('completed');
    }
    orderedList.appendChild(listItem);
  })
}

function addTaskToList() {
  const taskInput = document.querySelector('#texto-tarefa');
  const orderedList = document.querySelector('#lista-tarefa');
  const listItem = document.createElement('li');
  if (taskInput !== '') {
    listItem.innerHTML = taskInput.value;
    orderedList.appendChild(listItem);
    taskInput.value = '';
  }
}

function enterKey(evt) {
  if (evt.keyCode === 13) {
    addTaskToList();
  } else {
    // Do nothing
  }
}

function turnGray(evt) {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].classList.remove('selected');
  }
  const selectedItem = evt.target;
  selectedItem.classList.add('selected');
}

function lineThrough(evt) {
  const selectedItem = evt.target;
  if (selectedItem.classList.contains('completed')) {
    selectedItem.classList.remove('completed');
  } else {
    selectedItem.classList.add('completed');
  }
}

function remover(evt) {
  const id = evt.target.id;
  let selectedElement = '';
  if (id === 'remover-finalizados') selectedElement = '.completed';
  if (id === 'apaga-tudo') selectedElement = 'li';
  if (id === 'remover-selecionado') selectedElement = '.selected';
  const elements = document.querySelectorAll(selectedElement);
  elements.forEach((element) => element.remove());
}

function saveTasks() {
  localStorage.clear();
  const savedTasks = [];
  const completedTasks = [];
  const tasks = document.getElementsByTagName('li');
  for (let index = 0; index < tasks.length; index += 1) {
    savedTasks.push(tasks[index].innerText);
    if (tasks[index].classList.contains('completed')) {
      completedTasks.push('true');
    } else {
      completedTasks.push('false');
    }
  }
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
  localStorage.setItem('completed', JSON.stringify(completedTasks));
}

function moveUp() {
  const orderedList = document.querySelector('ol');
  const listItem = document.querySelectorAll('li');
  const selectedItem = document.querySelector('.selected');
  if (selectedItem === null || listItem[0].classList.contains('selected')) {
    // do nothing
  } else {
    orderedList.insertBefore(selectedItem, selectedItem.previousElementSibling);
  }
}

function moveDown() {
  const orderedList = document.querySelector('ol');
  const listItem = document.querySelectorAll('li');
  const lastItem = listItem[(listItem.length - 1)];
  const selectedItem = document.querySelector('.selected');
  if (selectedItem === null || lastItem.classList.contains('selected')) {
    // do nothing
  } else {
    const nextElement = selectedItem.nextElementSibling;
    orderedList.insertBefore(selectedItem, nextElement.nextElementSibling);
  }
}

function addEventListeners() {
 const taskInputButton = document.querySelector('#criar-tarefa');
  taskInputButton.addEventListener('click', addTaskToList);
  const taskInput = document.querySelector('#texto-tarefa');
  taskInput.addEventListener('keyup', enterKey);
  const orderedList = document.querySelector('ol');
  orderedList.addEventListener('click', turnGray);
  orderedList.addEventListener('dblclick', lineThrough);
  const removeButton = document.querySelector('#apaga-tudo');
  removeButton.addEventListener('click', remover);
  const removeCompletedButton = document.querySelector('#remover-finalizados');
  removeCompletedButton.addEventListener('click', remover);
  const saveTasksButton = document.querySelector('#salvar-tarefas');
  saveTasksButton.addEventListener('click', saveTasks);
  const moveUpButton = document.querySelector('#mover-cima');
  moveUpButton.addEventListener('click', moveUp);
  const moveDownButton = document.querySelector('#mover-baixo');
  moveDownButton.addEventListener('click', moveDown);
  const removeSelectedButton = document.querySelector('#remover-selecionado');
  removeSelectedButton.addEventListener('click', remover);
}

window.onload = function () {
  createHeader();
  createMain();
  addEventListeners();
  retrieveLocalStorage();
};
