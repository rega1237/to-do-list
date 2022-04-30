import data from './data.js';
import displayList from './display.js';
import { setOnLocal } from './addRemove.js';

export const clearBtn = document.querySelector('.clear-btn');

export const clearCompleted = () => {
  data.toDoArr = data.toDoArr.filter((toDo) => toDo.completed !== true);
  data.toDoArr.forEach((toDo, idx) => {
    toDo.index = idx + 1;
  });
  setOnLocal();
  displayList();
};