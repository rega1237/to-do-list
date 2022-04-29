import { clearBtn, clearCompleted } from './clearAllCompleted.js';

export default () => {
  clearBtn.addEventListener('click', clearCompleted);
};