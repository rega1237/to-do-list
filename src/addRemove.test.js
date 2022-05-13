const fs = require('fs');
import { add, remove } from "./modules/addRemove.js";
import displayList from "./modules/display.js"

describe('deleteAndRemoveTask', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('dist/index.html');
    add();
    displayList();
  })

  test('add new', () => {
    const list = document.getElementsByTagName('li');
    expect(list).toHaveLength(1);
  })

  test('saves the task into the local storage', () => {
    expect(localStorage['toDo']).toBeTruthy();
  })

  test('remove', () => {
    const list = document.getElementsByTagName('li');
    const trashIcon = list[0].childNodes[0].childNodes[2].childNodes[0];
    remove(trashIcon);
    expect(list).toHaveLength(0);
  })

  test('check remove the task from the local storage', () => {
    expect(localStorage['toDo']).toBe('[]');
  })
})

