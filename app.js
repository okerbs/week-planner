// agrega inputs en la columna de 'Objetivos' y crea un botón para eliminar

const buttonObjective = document.querySelector('#add-objective');
buttonObjective.addEventListener('click', addObjective);

function addObjective () {
    const list = document.querySelector('.list');
    const element = document.createElement('p');
    list.appendChild(element);
    
    const innerElement = document.createElement('i');
    innerElement.textContent = '';
    innerElement.className = 'check-box';
    element.appendChild(innerElement);

    let newGoal = document.createElement('input');
    newGoal.setAttribute('type', 'text');
    newGoal.setAttribute('placeholder', 'Escribe algo...');
    newGoal.setAttribute('maxlength', '40');
    newGoal.setAttribute('spellcheck', 'false');
    innerElement.insertAdjacentElement('afterend', newGoal);

    const innerButton = document.createElement('button');
    innerButton.textContent = 'X';
    innerButton.className = 'delete-btn';
    newGoal.insertAdjacentElement('afterend', innerButton);

    innerButton.onclick = function () {
        element.parentNode.removeChild(element);
    }
}

// agrega tarjetas en las columnas del dia que corresponda, y crea un botón para eleminar

const monBtn = document.querySelector('#add-task-monday');
monBtn.addEventListener('click', addTaskCard);
const tueBtn = document.querySelector('#add-task-tuesday');
tueBtn.addEventListener('click', addTaskCard);
const wedBtn = document.querySelector('#add-task-wednesday');
wedBtn.addEventListener('click', addTaskCard);
const thuBtn = document.querySelector('#add-task-thursday');
thuBtn.addEventListener('click', addTaskCard);
const friBtn = document.querySelector('#add-task-friday');
friBtn.addEventListener('click', addTaskCard);

const mon = document.querySelector('.monday-add');
const tue = document.querySelector('.tuesday-add');
const wed = document.querySelector('.wednesday-add');
const thu = document.querySelector('.thursday-add');
const fri = document.querySelector('.friday-add');

function addTaskCard (mon, tue, wed, thu, fri) {
    const newCard = document.createElement('div');
    newCard.className = 'task-card';
    this.insertAdjacentElement('afterend', newCard);

    const innerButton = document.createElement('button');
    innerButton.className = 'delete-btn-task';
    innerButton.textContent = 'X';
    newCard.appendChild(innerButton);

    const addTaskDescription = document.createElement('div');
    addTaskDescription.className = 'task-description';
    innerButton.insertAdjacentElement('afterend', addTaskDescription);

    let inputTask = document.createElement('input');
    inputTask.setAttribute('type', 'text');
    inputTask.setAttribute('placeholder', 'Tarea');
    inputTask.setAttribute('maxlength', '15');
    addTaskDescription.insertAdjacentElement('afterbegin', inputTask);

    const taskBody = document.createElement('div');
    taskBody.className = 'task-body';
    inputTask.insertAdjacentElement('afterend', taskBody);

    let inputTime = document.createElement('input');
    inputTime.setAttribute('type', 'text');
    inputTime.setAttribute('placeholder', 'Hora');
    inputTime.setAttribute('maxlength', '7');
    taskBody.insertAdjacentElement('afterbegin', inputTime);

    const newP = document.createElement('p');
    inputTime.insertAdjacentElement('afterend', newP);

    let textDescription = document.createElement('textarea');
    textDescription.setAttribute('cols', '16');
    textDescription.setAttribute('rows', '3');
    textDescription.setAttribute('placeholder', 'Descripción');
    textDescription.setAttribute('spellcheck', 'false');
    textDescription.setAttribute('maxlength', '30');
    newP.appendChild(textDescription);

    innerButton.addEventListener('click', function() {
        newCard.parentNode.removeChild(newCard);
    })

}
