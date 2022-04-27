import './styles.css';

const toDoArr = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'fix the car',
    completed: false,
    index: 1,
  },
  {
    description: 'walking the dog',
    completed: false,
    index: 2,
  }];

const displayList = () => {
  const listUl = document.querySelector('.list-container');
  let listText;

  for (let i = 0; i < toDoArr.length; i += 1) {
    let { index } = toDoArr[i];
    const { description } = toDoArr[i];
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
    listText = description;
    textList.textContent = listText;
    iconDots.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    liWraper.append(checkbox);
    liWraper.append(textList);
    liWraper.append(iconDots);
    listElement.append(liWraper);
    listUl.append(listElement);
  }
};

displayList();