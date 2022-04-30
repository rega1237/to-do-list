/* eslint-disable import/no-cycle */
import data from './data.js';
import { setOnLocal } from './addRemove.js';

const checkBoxValue = (e) => {
  const { target } = e;
  const targetId = parseInt(target.id, 10);
  for (let i = 0; i < data.toDoArr.length; i += 1) {
    if (data.toDoArr[i].index === targetId && target.value === 'false') {
      data.toDoArr[i].completed = true;
      target.value = 'true';
    } else if (data.toDoArr[i].index === targetId && target.value === 'true') {
      data.toDoArr[i].completed = false;
      target.value = 'false';
    }
  }
  setOnLocal();
};

export default checkBoxValue;