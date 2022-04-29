import './styles.css';
import displayList from './modules/display.js';
import clearAllListeners from './modules/clearAllListener.js';
import { insertTaskText, addInputListener } from './modules/addRemove.js';

displayList();
addInputListener();
insertTaskText();
clearAllListeners();
