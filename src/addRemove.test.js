/**
 * @jest-environment jsdom
 */

import { add } from "./modules/addRemove.js";

test('Add one new item to the list', () => {
  document.body.innerHTML =
  '<ul class="list-container"></ul>';
  add();
  const list = document.querySelectorAll('.list-container li');
  expect(list).toHaveLength(1);
});