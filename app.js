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

const Mon = document.querySelector('.monday-add');
const Tue = document.querySelector('.tuesday-add');
const Wed = document.querySelector('.wednesday-add');
const Thu = document.querySelector('.thursday-add');
const Fri = document.querySelector('.friday-add');

const MonBtn = document.querySelector('#add-task-monday');
MonBtn.addEventListener('click', addTaskMon);
const TueBtn = document.querySelector('#add-task-tuesday');
TueBtn.addEventListener('click', addTaskTue);
const WedBtn = document.querySelector('#add-task-wednesday');
WedBtn.addEventListener('click', addTaskWed);
const ThuBtn = document.querySelector('#add-task-thursday');
ThuBtn.addEventListener('click', addTaskThu);
const FriBtn = document.querySelector('#add-task-friday');
FriBtn.addEventListener('click', addTaskFri);

function addTaskMon () {
    const newCard = document.createElement('div');
    newCard.className = 'task-card';
    Mon.insertAdjacentElement('afterend', newCard);

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

function addTaskTue () {
    const newCard = document.createElement('div');
    newCard.className = 'task-card';
    Tue.insertAdjacentElement('afterend', newCard);

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

function addTaskWed () {
    const newCard = document.createElement('div');
    newCard.className = 'task-card';
    Wed.insertAdjacentElement('afterend', newCard);

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

function addTaskThu () {
    const newCard = document.createElement('div');
    newCard.className = 'task-card';
    Thu.insertAdjacentElement('afterend', newCard);

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

function addTaskFri () {
    const newCard = document.createElement('div');
    newCard.className = 'task-card';
    Fri.insertAdjacentElement('afterend', newCard);

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