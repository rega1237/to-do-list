const fs = require('fs');
import checkBoxValue from "./modules/checkbox.js";
import { clearCompleted } from "./modules/clearAllCompleted.js";
import { add, changeValue } from "./modules/addRemove.js";
import displayList from "./modules/display.js"
import data from "./modules/data.js"

describe('update to-do task', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
    const newElement = document.getElementsByTagName('input');
    const currentValue = 'Wash Dishes'
    const expectValue = 'wash car'
    newElement[0].value = currentValue;
    add();
    displayList();
    const checkBox = newElement[1];
    const e = { target: checkBox };
    changeValue(1, expectValue);
    checkBoxValue(e);
  });

  test('change value on the array', () => {
    const expectValue = 'wash car';
    expect(data.toDoArr[0].description).toBe(expectValue);
  })

  test('change value on the local storage', () => {
    const expectValue = 'wash car';
    const localArr = JSON.parse(localStorage.getItem('toDo'));
    expect(localArr[0].description).toBe(expectValue);
  })

  test('change value of the complete to true on the array', () => {
    expect(data.toDoArr[0].completed).toBe(true);
  })

  test('change value of the completed to true on the local storage', () => {
    const localArr = JSON.parse(localStorage.getItem('toDo'));
    expect(localArr[0].completed).toBe(true);
  })

  test(' check clear all completed on the array', () => {
    clearCompleted();
    expect(data.toDoArr).toStrictEqual([]);
  })

  test('check clear all completed on the local storage', () => {
    const localArr = JSON.parse(localStorage.getItem('toDo'));
    expect(localArr).toStrictEqual([]);
  })
})
