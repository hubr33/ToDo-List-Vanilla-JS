const editor = document.querySelector('.editor');
const cancelBtn = document.querySelector('.cancel');
const toDoInput = document.querySelector('.exe');
const addBtn = document.querySelector('.add');
const toDoArea = document.querySelector('.newObjects');
const show = document.querySelector('.show');
const max = document.querySelector('.max');
const error = document.querySelector('.error');
const editorInput = document.querySelector('.edit-text');
const acceptBtn = document.querySelector('.accept');
const editorError = document.querySelector('.editor-error');

let toDoCount = 0;
let doneID = 0;
let valueID = 0;
let choosenText;
let editText;

const checkEditor = () => {
    editor.style.display = "flex";
}


const cross = (e) => {
    valueID = e.target.id;
    choosenText = document.getElementById(`txt${valueID}`);
    console.log(choosenText);
    choosenText.classList.toggle('cover');
}

const editionPanel = (e) => {
    valueID = e.target.id;
    editText = document.getElementById(`txt${valueID}`);
    console.log(editText);
}

const changeText = () => {
    if (editorInput.value !== '') {
        editText.textContent = `${editorInput.value}`;
        editorError.style.display = 'none';
        editor.style.display = "none";
        editorInput.value = '';
    } else {
        editorError.style.display = 'block';
    }
}

const closeEditor = () => {
    editor.style.display = "none";
}

const checkLeng = () => {
    if (toDoInput.value.length === 40 || editorInput.value.length === 40) {
        max.style.display = 'block';
    } else {
        max.style.display = 'none';
    }
}

const remove = (e) => {
    e.target.parentNode.remove();
    --toDoCount;
    if (toDoCount === 0) {
        show.style.display = 'block'
    }
    doneID--;

}

const activeCheck = () => {
    if (toDoInput.value !== 0) {
        error.style.display = 'none';
    }
}
const createNote = (e) => {
    if (toDoInput.value !== '') {
        const newText = document.createElement('div')
        toDoArea.appendChild(newText);
        newText.innerHTML = `<div class="todo">
    <p class="todo-text" id="txt${doneID}">${toDoInput.value}</p>
    <i class="fas fa-check done" id="${doneID}"></i>
    <div class="edit" onclick="checkEditor()" id="${doneID}">EDIT</div>
    <i class="fas fa-times" id="${doneID++}"></i>
    </div>`;

        newText.querySelector('.fa-times').addEventListener('click', remove);
        newText.querySelector('.done').addEventListener('click', cross);
        newText.querySelector('.edit').addEventListener('click', editionPanel);

        error.style.display = 'none';
        toDoInput.value = '';
        max.style.display = 'none';
        ++toDoCount;
    } else {
        error.style.display = 'block';
    }

    if (toDoCount === 0) {
        show.style.display = 'block'
    } else show.style.display = 'none';
}

document.addEventListener('keyup', activeCheck)
document.addEventListener('keyup', checkLeng);
addBtn.addEventListener('click', createNote);
cancelBtn.addEventListener('click', closeEditor);
acceptBtn.addEventListener('click', changeText);