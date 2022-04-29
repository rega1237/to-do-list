/* eslint-disable import/no-cycle */

import data from './data.js';
import { remove, changeValue, getFromLocal } from './addRemove.js';
import checkBoxValue from './checkbox.js';

const displayList = () => {
  getFromLocal();
  const listUl = document.querySelector('.list-container');
  listUl.innerHTML = null;
  let listText;
  for (let i = 0; i < data.toDoArr.length; i += 1) {
    const { description } = data.toDoArr[i];
    const { index } = data.toDoArr[i];
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'task-completed';
    checkbox.value = 'false';
    checkbox.id = `${i + 1}`;
    const listElement = document.createElement('li');
    const liWraper = document.createElement('div');
    const textList = document.createElement('input');
    textList.type = 'text';
    textList.name = 'toDoElement';
    const iconDots = document.createElement('span');
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

    const iconLi = iconDots.children[0];

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

    checkbox.addEventListener('input', (e) => {
      checkBoxValue(e);
    });
  }
};

export default displayList;