export let toDoArr = [];
const addInput = document.querySelector('.insert-text');
const form = document.getElementById('form');
let addValue = '';


const add = () => {
  toDoArr.push({description: addValue, completed: false, index: toDoArr.length + 1});
  localStorage.setItem('toDo', JSON.stringify(toDoArr));
}

const remove = (index) => {
  toDoArr.splice(index,1);
  toDoArr.forEach(function (toDo, idx) {
    toDoArr[idx].index = idx + 1;
  });
  console.log(toDoArr);
  localStorage.setItem('toDo', JSON.stringify(toDoArr));
}

export const displayList = () => {
  if (JSON.parse(localStorage.getItem('toDo'))){
    toDoArr = JSON.parse(localStorage.getItem('toDo'));
  }else {
    toDoArr = [];
  }
  const listUl = document.querySelector('.list-container');
  listUl.innerHTML = null;
  let listText;
  for (let i = 0; i < toDoArr.length; i += 1) {
    const { description } = toDoArr[i];
    let { index } = toDoArr[i];
    index = i;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.value = 'value';
    checkbox.id = `checkbox-${index}`;
    const listElement = document.createElement('li');
    const liWraper = document.createElement('div');
    const textList = document.createElement('p');
    const iconDots = document.createElement('span');
    liWraper.className = 'li-wraper';
    listElement.className = 'li-element'
    listText = description;
    textList.textContent = listText;
    iconDots.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    liWraper.append(checkbox);
    liWraper.append(textList);
    liWraper.append(iconDots);
    listElement.append(liWraper);
    listUl.append(listElement);

    const iconLi = iconDots.children[0];
    listElement.addEventListener('click', () => {
      iconLi.classList.toggle('fa-ellipsis-vertical');
      iconLi.classList.toggle('fa-trash');
    })
    iconDots.addEventListener('click', () => {
      if (iconLi.classList.contains('fa-trash')){
        listElement.remove();
        remove(index);
      }
    })
  }
};

document.addEventListener('input', () => {
  addValue = addInput.value;
})

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter'){
    e.preventDefault();
    add();
    displayList();
    form.reset();
  }  
})










