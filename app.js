// agrega inputs en la columna de 'Objetivos' y crea un botón para eliminar

let buttonObjective = document.querySelector('#add-objective');
buttonObjective.addEventListener('click', addObjective);

function addObjective () {
    let list = document.querySelector('.list');
    let element = document.createElement('p');
    list.appendChild(element);
    
    let innerElement = document.createElement('i');
    innerElement.textContent = '';
    innerElement.className = 'check-box';
    element.appendChild(innerElement);

    let newGoal = document.createElement('input');
    newGoal.setAttribute('type', 'text');
    newGoal.setAttribute('placeholder', 'Escribe algo...');
    newGoal.setAttribute('maxlength', '40');
    newGoal.setAttribute('spellcheck', 'false');
    innerElement.insertAdjacentElement('afterend', newGoal);

    let innerButton = document.createElement('button');
    innerButton.textContent = 'X';
    innerButton.className = 'delete-btn';
    newGoal.insertAdjacentElement('afterend', innerButton);

    innerButton.onclick = function () {
        element.parentNode.removeChild(element);
    }
}

// agrega tarjetas en las columnas del dia que corresponda y crea un botón para eleminar segun el botón del dia en el cual se haga click

let monBtn = document.querySelector('#add-task-monday');
monBtn.addEventListener('click', addTaskCard);
let tueBtn = document.querySelector('#add-task-tuesday');
tueBtn.addEventListener('click', addTaskCard);
let wedBtn = document.querySelector('#add-task-wednesday');
wedBtn.addEventListener('click', addTaskCard);
let thuBtn = document.querySelector('#add-task-thursday');
thuBtn.addEventListener('click', addTaskCard);
let friBtn = document.querySelector('#add-task-friday');
friBtn.addEventListener('click', addTaskCard);

const MON = document.querySelector('.monday-add');
const TUE = document.querySelector('.tuesday-add');
const WED = document.querySelector('.wednesday-add');
const THU = document.querySelector('.thursday-add');
const FRI = document.querySelector('.friday-add');

function addTaskCard () {
    let newCard = document.createElement('div');
    newCard.className = 'task-card';
    monBtn.onclick = function() {MON.insertAdjacentElement('afterend', newCard);};
    tueBtn.onclick = function() {TUE.insertAdjacentElement('afterend', newCard);};
    wedBtn.onclick = function() {WED.insertAdjacentElement('afterend', newCard);};
    thuBtn.onclick = function() {THU.insertAdjacentElement('afterend', newCard);};
    friBtn.onclick = function() {FRI.insertAdjacentElement('afterend', newCard);};

    let innerButton = document.createElement('button');
    innerButton.className = 'delete-btn-task';
    innerButton.textContent = 'X';
    newCard.appendChild(innerButton);

    let addTaskDescription = document.createElement('div');
    addTaskDescription.className = 'task-description';
    innerButton.insertAdjacentElement('afterend', addTaskDescription);

    let inputTask = document.createElement('input');
    inputTask.setAttribute('type', 'text');
    inputTask.setAttribute('placeholder', 'Tarea');
    inputTask.setAttribute('maxlength', '15');
    addTaskDescription.insertAdjacentElement('afterbegin', inputTask);

    let taskBody = document.createElement('div');
    taskBody.className = 'task-body';
    inputTask.insertAdjacentElement('afterend', taskBody);

    let inputTime = document.createElement('input');
    inputTime.setAttribute('type', 'text');
    inputTime.setAttribute('placeholder', 'Hora');
    inputTime.setAttribute('maxlength', '7');
    taskBody.insertAdjacentElement('afterbegin', inputTime);

    let newP = document.createElement('p');
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
