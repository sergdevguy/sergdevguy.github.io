let field = document.getElementById('field');
let restartButton = document.getElementById('restart');
let mobileButtons = document.getElementById('mobileButtons');

// 0 - nothing
// 1 - wall
// 2 - floor
// 3 - box checkpoit
// 4 - box
// 5 - player

let levels = [
    [
        [0,0,0,1,1,1,1,1],
        [1,1,1,1,2,4,3,1],
        [1,3,2,4,5,1,1,1],
        [1,1,1,1,4,1,0,0],
        [0,0,0,1,3,1,0,0],
        [0,0,0,1,1,1,0,0],
    ],
    [
        [1,1,1,1,1,0,0,0,0],
        [1,5,2,2,1,0,0,0,0],
        [1,2,4,4,1,0,1,1,1],
        [1,2,4,2,1,0,1,3,1],
        [1,1,1,2,1,1,1,3,1],
        [0,1,1,2,2,2,2,3,1],
        [0,1,2,2,2,1,2,2,1],
        [0,1,2,2,2,1,1,1,1],
        [0,1,1,1,1,1,0,0,0],
    ],
    [
        [0,1,1,1,1,1,1,1,0,0],
        [0,1,2,2,2,2,2,1,1,1],
        [1,1,4,1,1,1,2,2,2,1],
        [1,2,5,2,4,2,2,4,2,1],
        [1,2,3,3,1,2,4,2,1,1],
        [1,1,3,3,1,2,2,2,1,0],
        [0,1,1,1,1,1,1,1,1,0],
    ],
    [
        [0,1,1,1,1,1,0,0],
        [0,1,2,2,1,1,1,0],
        [0,1,5,4,2,2,1,0],
        [1,1,1,2,1,2,1,1],
        [1,3,1,2,1,2,2,1],
        [1,3,4,2,2,1,2,1],
        [1,3,2,2,2,4,2,1],
        [1,1,1,1,1,1,1,1],
    ],
    [
        [0,0,0,1,1,1,1,1,1,1],
        [0,0,1,1,2,2,1,2,5,1],
        [0,0,1,2,2,2,1,2,2,1],
        [0,0,1,4,2,4,2,4,2,1],
        [0,0,1,2,4,1,1,2,2,1],
        [1,1,1,2,4,2,1,2,1,1],
        [1,3,3,3,3,3,2,2,1,0],
        [1,1,1,1,1,1,1,1,1,0],
    ],
];
let levelNumber = 0;
let currentLevel = cloneLevel(levels, levelNumber);
let checkpoints;
let checkpointCountForWin;

drawLevel(currentLevel);
checkpoints = setCheckpoints(currentLevel);
checkpointCountForWin = checkpoints.length;

restartButton.onclick = function(e) {
    field.innerHTML = '';
    currentLevel = cloneLevel(levels, levelNumber);
    checkpoints = setCheckpoints(currentLevel);
    checkpointCountForWin = checkpoints.length;
    drawLevel(currentLevel);
}

document.onkeyup = function(e) {
    gameCyrcle(e);
}

mobileButtons.onclick = function(e) {
    gameCyrcle(e);
}

// functions :)
function gameCyrcle(e) {
    if (e.code === 'ArrowUp' || e.code === 'ArrowDown' ||
        e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
        move(e.code, currentLevel);
    }
    switch (e.target.dataset.direction) {
        case 'top':
            move('ArrowUp', currentLevel);
            break;
        case 'bottom':
            move('ArrowDown', currentLevel);
            break;
        case 'left':
            move('ArrowLeft', currentLevel);
            break;
        case 'right':
            move('ArrowRight', currentLevel);
            break;

    }
}

function nextLevel() {
    levelNumber++;

    // show win message if last level
    if (levelNumber === levels.length) {
        winMessage(field);
        restartButton.hidden = true;
        mobileButtons.style.display = 'none';
        return;
    }

    currentLevel = cloneLevel(levels, levelNumber);
    field.innerHTML = '';
    drawLevel(currentLevel);
    checkpoints = setCheckpoints(currentLevel);
    document.onkeyup = function(e) {
        gameCyrcle(e);
    }
}

function drawLevel(level) {
    for (let i = 0; i < level.length; i++) {
        field.insertAdjacentHTML('beforeend', '<div class="field__row"></div>');

        for (let j = 0; j < level[i].length; j++) {
            field.lastElementChild.insertAdjacentHTML('beforeend', '<span></span>');
            switch (level[i][j]) {
                case 0:
                    field.lastElementChild.lastElementChild.classList.add('_0');
                    break;
                case 1:
                    field.lastElementChild.lastElementChild.classList.add('_1');
                    break;
                case 2:
                    field.lastElementChild.lastElementChild.classList.add('_2');
                    break;
                case 3:
                    field.lastElementChild.lastElementChild.classList.add('_3');
                    break;
                case 4:
                    field.lastElementChild.lastElementChild.classList.add('_4');
                    break;
                case 5:
                    field.lastElementChild.lastElementChild.classList.add('_5');
                    break;
            }
        }
    }
}

function findHero(level) {
    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            if (level[i][j] === 5) {
                return [i, j];
            }
        }
    }
}

function checkCheckpoints(checkpoints, currentLevel) {
    let checkpointsWatch = checkpoints.length;

    for (let i = 0; i < checkpoints.length; i++) {
        if (currentLevel[checkpoints[i][0]][checkpoints[i][1]] === 4) {
            checkpointsWatch--;
            field.children[checkpoints[i][0]].children[checkpoints[i][1]].classList.add('_checked');
        }

        if (checkpointsWatch === 0) {
            document.onkeyup = null;

            setTimeout(() => {
                nextLevel();
            }, 2000);

            return;
        }

        if (currentLevel[checkpoints[i][0]][checkpoints[i][1]] !== 4 &&
            currentLevel[checkpoints[i][0]][checkpoints[i][1]] !== 5) {
            currentLevel[checkpoints[i][0]][checkpoints[i][1]] = 3;
        }
    }
}

function setCheckpoints(level) {
    let checkpointPositions = [];

    for (let i = 0; i < level.length; i++) {
        for (let j = 0; j < level[i].length; j++) {
            if (level[i][j] === 3) {
                checkpointPositions.push([[i],[j]]);
            }
        }
    }

    return checkpointPositions;
}

function move(direction, currentLevel) {
    let heroPosition = findHero(currentLevel);

    nextStepDirection(direction);
    checkCheckpoints(checkpoints, currentLevel);
    drawNewLevel();

    function nextStepDirection(direction) {
        switch (direction) {
            case 'ArrowUp':
                moveHeroInArray([-1, 0]);
                break;
            case 'ArrowDown':
                moveHeroInArray([1, 0]);
                break;
            case 'ArrowLeft':
                moveHeroInArray([0, -1]);
                break;
            case 'ArrowRight':
                moveHeroInArray([0, 1]);
                break;
        }
    }
    function moveHeroInArray(arr) {
        // don`t move if next block numbers is obstacles
        if (currentLevel[ heroPosition[0]+arr[0] ][ heroPosition[1]+arr[1] ] === 0 ||
            currentLevel[ heroPosition[0]+arr[0] ][ heroPosition[1]+arr[1] ] === 1) {
            return;
        }

        // don`t move if next block numbers is box, but after box is obstacles (1-wall or 4-box)
        if (currentLevel[ heroPosition[0]+arr[0] ][ heroPosition[1]+arr[1] ] === 4 &&
            (currentLevel[ heroPosition[0]+arr[0]+arr[0] ][ heroPosition[1]+arr[1]+arr[1] ] === 1 ||
                currentLevel[ heroPosition[0]+arr[0]+arr[0] ][ heroPosition[1]+arr[1]+arr[1] ] === 4)) {
            return;
        }

        // move hero and box if next block is box
        if (currentLevel[ heroPosition[0]+arr[0] ][ heroPosition[1]+arr[1] ] === 4 &&
            currentLevel[ heroPosition[0]+arr[0]+arr[0] ][ heroPosition[1]+arr[1]+arr[1] ] !== 0 &&
            currentLevel[ heroPosition[0]+arr[0]+arr[0] ][ heroPosition[1]+arr[1]+arr[1] ] !== 1) {
            currentLevel[ heroPosition[0] ][ heroPosition[1] ] = 2;
            currentLevel[ heroPosition[0]+arr[0] ][ heroPosition[1]+arr[1] ] = 5;

            arr[0] += arr[0];
            arr[1] += arr[1];
            currentLevel[ heroPosition[0]+arr[0] ][ heroPosition[1]+arr[1] ] = 4;

            return;
        }

        currentLevel[ heroPosition[0] ][ heroPosition[1] ] = 2;
        currentLevel[ heroPosition[0]+arr[0] ][ heroPosition[1]+arr[1] ] = 5;
        return;
    }
    function drawNewLevel() {
        field.innerHTML = '';
        drawLevel(currentLevel);
    }
}

function winMessage(container) {
    container.innerHTML = '<div class="win"><p>You complited all levels!</p> <p>You win!</p></div>';
}

function cloneLevel(levels, levelNumber) {
    if (!levels) return;

    let cloneArr = [];

    for (let i = 0; i < levels[levelNumber].length; i++) {
        cloneArr.push([]);

        for (let j = 0; j < levels[levelNumber][i].length; j++) {
            cloneArr[i].push( levels[levelNumber][i][j] );
        }
    }

    return cloneArr;
}