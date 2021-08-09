let field = document.getElementById('field');
let restartButton = document.getElementById('restartButton');
let textWin = '<div class="win">You win!</div>';
let fieldWidth = 9;
let fieldHeight = 9;
let minesCount = 10;
let winFieldsCount = fieldWidth * fieldHeight - minesCount;

drawField(field, fieldWidth, fieldHeight);
placeMines(field, minesCount, fieldWidth, fieldHeight);

field.onclick = function(e) {
    fOnClick(e);
}

field.oncontextmenu = function(e) {
    fOnContextmenu(e);
}

restartButton.onclick = function() {
    if (restartButton.disabled) return;

    field.innerHTML = '';
    field.onclick = function(e) {
        fOnClick(e);
    }
    field.oncontextmenu = function(e) {
        fOnContextmenu(e);
    }
    drawField(field, fieldWidth, fieldHeight);
    placeMines(field, minesCount, fieldWidth, fieldHeight);
    restartButton.classList.toggle('_hidden');
}

// functions :)
function fOnClick(e) {
    if (e.target.dataset.type === 'mine') {
        openMines(field, fieldWidth, fieldHeight);
        e.target.dataset.currentMine = 'true';
        restartButton.classList.toggle('_hidden');
        restartButton.disabled = false;
        field.onclick = null;
        field.oncontextmenu = (e) => e.preventDefault();
    }
    if (e.target.dataset.type === 'number') {
        e.target.dataset.status = 'opened';
    }
    if (e.target.dataset.type === 'empty') {
        const nodeY = e.target.parentElement.parentElement;
        const nodeX = e.target.parentElement;

        openEmpty([[...nodeY.children].indexOf(e.target.parentElement), [...nodeX.children].indexOf(e.target)]);
    }

    if (checkWin(field, fieldWidth, fieldHeight, winFieldsCount)) {
        setTimeout(() => {
            drawTextWin(field, textWin);
            restartButton.classList.toggle('_hidden');
            restartButton.disabled = false;
        }, 500);
        field.onclick = null;
        field.oncontextmenu = (e) => e.preventDefault();
    }
}

function fOnContextmenu(e) {
    e.preventDefault();

    if (e.target.dataset.status === 'opened') return;

    if (!e.target.classList.contains('field__flag')) {
        e.target.insertAdjacentHTML('beforeend', '<span class="field__flag">&#128681;</span>');
        e.target.dataset.status = 'flaged';
    } else {
        e.target.parentElement.dataset.status = '';
        e.target.remove();
    }
}

function openEmpty(coord) {
    if (!field.children[coord[0]] || !field.children[coord[0]].children[coord[1]]) return;
    if (field.children[coord[0]].children[coord[1]].dataset.status === 'opened') return;
    if (field.children[coord[0]].children[coord[1]].dataset.status === 'flaged') return;

    if (field.children[coord[0]].children[coord[1]].dataset.type === 'empty') {
        field.children[coord[0]].children[coord[1]].dataset.status = 'opened';
        openEmpty( [ coord[0], coord[1]-1 ] );
        openEmpty( [ coord[0], coord[1]+1 ] );
        openEmpty( [ coord[0]-1, coord[1] ] );
        openEmpty( [ coord[0]+1, coord[1] ] );

        openEmpty( [ coord[0]+1, coord[1]+1 ] );
        openEmpty( [ coord[0]-1, coord[1]-1 ] );
        openEmpty( [ coord[0]-1, coord[1]+1 ] );
        openEmpty( [ coord[0]+1, coord[1]-1 ] );
    }
    if (field.children[coord[0]].children[coord[1]].dataset.type === 'number') {
        field.children[coord[0]].children[coord[1]].dataset.status = 'opened';
    }
}

function drawField(field, fieldWidth, fieldHeight) {
    let fieldRow = '<div class="field__row"></div>';
    let fieldTd = '<div class="field__td" data-type="empty">0</div>';

    for (let i = 0; i < fieldHeight; i++) {
        field.insertAdjacentHTML('beforeend', fieldRow);

        for (let j = 0; j < fieldWidth; j++) {
            field.lastElementChild.insertAdjacentHTML('beforeend', fieldTd);
        }
    }
}

function placeMines(field, minesCount, fieldWidth, fieldHeight) {
    let minesCoordinates = [];

    for (let i = 0; i < minesCount; i++) {
        minesCoordinates[0] = getRandomNumber(fieldWidth-1, 0);
        minesCoordinates[1] = getRandomNumber(fieldHeight-1, 0);

        while (field.children[minesCoordinates[0]].children[minesCoordinates[1]].dataset.type === 'mine') {
            minesCoordinates[0] = getRandomNumber(fieldWidth-1, 0);
            minesCoordinates[1] = getRandomNumber(fieldHeight-1, 0);
        }

        field.children[minesCoordinates[0]].children[minesCoordinates[1]].dataset.type = 'mine';
        field.children[minesCoordinates[0]].children[minesCoordinates[1]].innerHTML = '<span class="field__mine"></span>';

        drawNumbersAroundMines(minesCoordinates);

        coloredNumbers(field);
    }

    function drawNumbersAroundMines(minesCoordinates) {
        minesCoordinates[0] -= 1;
        minesCoordinates[1] -= 1;
        addNumber(minesCoordinates);
        minesCoordinates[1] += 1;
        addNumber(minesCoordinates);
        minesCoordinates[1] += 1;
        addNumber(minesCoordinates);
        minesCoordinates[0] += 1;
        addNumber(minesCoordinates);
        minesCoordinates[1] -= 2;
        addNumber(minesCoordinates);
        minesCoordinates[0] += 1;
        addNumber(minesCoordinates);
        minesCoordinates[1] += 1;
        addNumber(minesCoordinates);
        minesCoordinates[1] += 1;
        addNumber(minesCoordinates);

        function addNumber(minesCoordinates) {
            if (field?.children[minesCoordinates[0]]?.children[minesCoordinates[1]] &&
                !field?.children[minesCoordinates[0]]?.children[minesCoordinates[1]]?.firstElementChild) {
                field.children[minesCoordinates[0]].children[minesCoordinates[1]].innerHTML =
                    +field.children[minesCoordinates[0]].children[minesCoordinates[1]].innerHTML + 1;
                field.children[minesCoordinates[0]].children[minesCoordinates[1]].dataset.type = 'number';
            }
        }
    }

    function coloredNumbers(field) {
        for (let i = 0; i < fieldHeight; i++) {
            for (let j = 0; j < fieldWidth; j++) {
                switch (field.children[i].children[j].innerHTML) {
                    case '1':
                        field.children[i].children[j].style.color = 'blue';
                        break;
                    case '2':
                        field.children[i].children[j].style.color = 'green';
                        break;
                    case '3':
                        field.children[i].children[j].style.color = 'red';
                        break;
                    case '4':
                        field.children[i].children[j].style.color = 'darkBlue';
                        break;
                    case '5':
                        field.children[i].children[j].style.color = 'darkRed';
                        break;
                }
            }
        }
    }
}

function getRandomNumber(max, min) {
    return Math.floor(Math.random( ) * (max - min + 1)) + min;
}

function openMines(field, fieldWidth, fieldHeight) {
    for (let i = 0; i < fieldHeight; i++) {
        for (let j = 0; j < fieldWidth; j++) {
            if (field.children[i].children[j].dataset.type === 'mine') {
                field.children[i].children[j].dataset.status = 'opened';
            }
        }
    }
}

function checkWin(field, fieldWidth, fieldHeight, winFieldsCount) {
    let openedFields = 0;

    for (let i = 0; i < fieldHeight; i++) {
        for (let j = 0; j < fieldWidth; j++) {
            if (field.children[i].children[j].dataset.status === 'opened') {
                openedFields++;
            }
        }
    }

    if (openedFields === winFieldsCount) {
        return true;
    }
}

function drawTextWin(field, textWin) {
    field.insertAdjacentHTML('afterbegin', textWin);
}