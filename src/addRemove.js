/* eslint-disable no-use-before-define, import/prefer-default-export */

let toDoArr = [];
const addInput = document.querySelector('.insert-text');
const form = document.getElementById('form');
let addValue = '';

const changeValue = (indexChange, value) => {
  toDoArr[indexChange - 1].description = value;
  localStorage.setItem('toDo', JSON.stringify(toDoArr));
};

const add = () => {
  toDoArr.push({ description: addValue, completed: false, index: toDoArr.length + 1 });
  localStorage.setItem('toDo', JSON.stringify(toDoArr));
};

const remove = (element) => {
  toDoArr = toDoArr.filter((toDo) => toDo.index !== parseInt(element.parentNode.id, 10));

  toDoArr.forEach((toDo, idx) => {
    toDoArr[idx].index = idx + 1;
  });

  element.parentNode.parentNode.remove();

  localStorage.setItem('toDo', JSON.stringify(toDoArr));
  displayList();
};

export const displayList = () => {
  if (JSON.parse(localStorage.getItem('toDo'))) {
    toDoArr = JSON.parse(localStorage.getItem('toDo'));
  } else {
    toDoArr = [];
  }
  const listUl = document.querySelector('.list-container');
  listUl.innerHTML = null;
  let listText;

  for (let i = 0; i < toDoArr.length; i += 1) {
    const { description } = toDoArr[i];
    const { index } = toDoArr[i];
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.value = 'value';
    checkbox.id = 'checkbox';
    const listElement = document.createElement('li');
    const liWraper = document.createElement('div');
    const textList = document.createElement('input');
    textList.type = 'text';
    textList.name = 'toDoElement';
    const iconDots = document.createElement('span');
    const iconLi = iconDots.children[0];
    liWraper.className = 'li-wraper';
    listElement.className = 'li-element';
    textList.className = `input-list-element ${(index)}`;
    listText = description;
    textList.value = listText;
    iconDots.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    iconDots.setAttribute('id', i + 1);
    liWraper.append(checkbox);
    liWraper.append(textList);
    liWraper.append(iconDots);
    listElement.append(liWraper);
    listUl.append(listElement);

    // Change the value of the task in the input

    textList.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const indexChange = textList.classList[1];
        e.preventDefault();
        changeValue(indexChange, textList.value);
        iconLi.classList.toggle('fa-ellipsis-vertical');
        iconLi.classList.toggle('fa-trash');
        listElement.style.backgroundColor = 'transparent';
        textList.blur();
      }
    });

    // Change icon to trash can and vice versa

    listElement.addEventListener('click', () => {
      iconLi.classList.toggle('fa-ellipsis-vertical');
      iconLi.classList.toggle('fa-trash');
      // listElement.style.backgroundColor = 'rgba(254 231 97 / 63%)';
      listElement.classList.toggle('background-list');
      listElement.classList.toggle('transparent');
      textList.style.backgroundColor = 'transparent';
    });

    // Remove element from  the DOM and call remove function

    iconDots.addEventListener('click', (e) => {
      if (iconLi.classList.contains('fa-trash')) {
        remove(e.target);
      }
    });
  }
};

addInput.addEventListener('input', () => {
  addValue = addInput.value;
});

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    add();
    displayList();
    form.reset();
  }
});