let field = document.getElementById('field');
let card = '<div class="card card_closed" data-status="closed"></div>';
let cards = [1, 2, 3, 4, 5, 6, 7, 8];
let openedCards = [];
let opened = 0;
let paused = false;
let gameStart = false;
let steps = 0;
let restartButton = document.getElementById('restart');

restartButton.hidden = true;

cards.push(...cards);
cards = mixarr(cards);

// create cards in HTML
for (let i = 0; i < cards.length; i++) {
    field.insertAdjacentHTML('beforeend', card);
    field.lastElementChild.innerHTML = cards[i];
}

field.onclick = function(e) {
    if (paused) return; // wait while two wrong opened cards was closed;
    if (!gameStart) timer('timer'); gameStart = true; // start timer one time on first click on card

    // do nothing if clicked card is opened
    if (e.target.dataset.status === 'opened' ||
        e.target.dataset.status === 'complited') {
        return;
    }

    openCard(e.target);
    steps++;
    document.getElementById('steps').innerHTML = steps;

    // don`t do next code if just one card is opened
    if (openedCards.length !== 2) return;

    // set comlited status for matched cards, or close their with delay if not
    if (openedCards[0] === openedCards[1]) {
        setOpenedCardsStatus('complited', '');
        opened += 2;
    } else {
        paused = true;
        setTimeout(() => {
            setOpenedCardsStatus('closed', 'card_closed');
            paused = false;
        }, 700);
    }

    // clear openedCards array for next try
    openedCards = [];

    if (opened === cards.length) {
        restartButton.hidden = false;
    }
}

restart.onclick = function() {
    field.innerHTML = '';
    cards = mixarr(cards);
    // create cards in HTML
    for (let i = 0; i < cards.length; i++) {
        field.insertAdjacentHTML('beforeend', card);
        field.lastElementChild.innerHTML = cards[i];
    }
    steps = 0;
    document.getElementById('timer').innerHTML = '00:00:00';
    document.getElementById('steps').innerHTML = '0';
    opened = 0;
    gameStart = false;
    restartButton.hidden = true;
}

function openCard(target) {
    target.dataset.status = 'opened';
    target.classList.remove('card_closed');
    openedCards.push(target.innerHTML);
}

function setOpenedCardsStatus(status, className) {
    for (let i = 0; i < field.children.length; i++) {
        if (field.children[i].dataset.status === 'opened') {
            field.children[i].dataset.status = status;
            if (!className) continue;
            field.children[i].classList.add(className);
        }
    }
}

function mixarr(arr){
    return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
}

function timer(elemId) {
    let timer = document.getElementById(elemId);
    let minutes = '00';
    let seconds = '00';
    let milliseconds = '00';

    let timerId = setInterval(() => {
        timer.innerHTML = setTime();
        if (opened === cards.length) clearTimeout(timerId);
    }, 10);

    function doubleNumber(number) {
        if (number < 10) return '0' + number;
        return number;
    }

    function setTime() {
        if (milliseconds === 99) {
            milliseconds = '00';
            seconds++;
            seconds = doubleNumber(seconds);
        }
        if (seconds === 60) {
            seconds = '00';
            minutes++;
            minutes = doubleNumber(minutes);
        }

        milliseconds++;
        milliseconds = doubleNumber(milliseconds);

        return `${minutes}:${seconds}:${milliseconds}`;
    }
}