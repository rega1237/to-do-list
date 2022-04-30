/* eslint-disable import/no-cycle */

import data from './data.js';
import displayList from './display.js';

const addInput = document.querySelector('.insert-text');
const form = document.getElementById('form');
let addValue = '';

export const setOnLocal = () => {
  localStorage.setItem('toDo', JSON.stringify(data.toDoArr));
};

export const getFromLocal = () => {
  if (JSON.parse(localStorage.getItem('toDo'))) {
    data.toDoArr = JSON.parse(localStorage.getItem('toDo'));
  } else {
    data.toDoArr = [];
  }
};

export const add = () => {
  data.toDoArr.push({ description: addValue, completed: false, index: data.toDoArr.length + 1 });
  setOnLocal();
};

export const remove = (element) => {
  data.toDoArr = data.toDoArr.filter((toDo) => toDo.index !== parseInt(element.parentNode.id, 10));

  // update the indexes

  data.toDoArr.forEach((toDo, idx) => {
    toDo.index = idx + 1;
  });

  element.parentNode.parentNode.remove();

  localStorage.setItem('toDo', JSON.stringify(data.toDoArr));
  displayList();
};

export const changeValue = (indexChange, value) => {
  data.toDoArr[indexChange - 1].description = value;
  localStorage.setItem('toDo', JSON.stringify(data.toDoArr));
};

export const addInputListener = () => {
  addInput.addEventListener('input', () => {
    addValue = addInput.value;
    return addValue;
  });
};

export const insertTaskText = () => {
  addInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      add();
      displayList();
      form.reset();
    }
  });
};
