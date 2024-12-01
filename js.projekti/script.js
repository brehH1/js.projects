window.addEventListener('DOMContentLoaded', () => {
// Alustetaan muuttujat ja haetaan tarvittavat elementit HTML:stä
const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');

// pelilauta ja muuttujat
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;
let againstComputer = true;

// Määritellään voittavat ehdot
const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// pelitilanteen tarkistus
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
    }

    if (!board.includes(''))
        announce(TIE);
}

// näyttää ilmoituksen pelitilanteesta
const announce = (type) => {
    switch(type){
        case PLAYERO_WON:
            announcer.innerHTML = 'Pelaaja <span class="playerO">O</span> Voitti!';
            break;    
        case PLAYERX_WON:                /*Kumpi voitti?*/
            announcer.innerHTML = 'Pelaaja <span class="playerX">X</span> Voitti!';
            break;
        case TIE:
            announcer.innerText = 'TasaPeli!'; /* vai tuliko tasapeli?*/
    }
    announcer.classList.remove('hide');
};

// Tarkistus, onko siirto sallittu
const isValidAction = (tile) => {
    if (tile.innerText === 'X' || tile.innerText === 'O'){
        return false;
    }

    return true;
};

// pelilaudan päivitys
const updateBoard =  (index) => {
    board[index] = currentPlayer;
}

// pelaajan vaihtaminen
const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
}

// pelaajan toimintojen käsittely
const userAction = (tile, index) => {
    if(isValidAction(tile) && isGameActive) {
        tile.innerText = currentPlayer;
        tile.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
        
    
        if (againstComputer && isGameActive && currentPlayer === 'O') {
            computerAction();
        }
    }
}

// tietokoneen siirton käsittely
const computerAction = () => {
    
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            tiles[i].innerText = currentPlayer;
            tiles[i].classList.add(`player${currentPlayer}`);
            updateBoard(i);
            handleResultValidation();
            changePlayer();
            break;
        }
    }
}

// Pelilaudan nollaus
const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
        changePlayer();
    }

    tiles.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('playerX');
        tile.classList.remove('playerO');
    });
    
    
    if (againstComputer && currentPlayer === 'O') {
        computerAction();
    }
}

// klikkaustapahtumien peliruuduille lisääminen
tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});

// Lisää klikkaustapahtuman reset-painikkeelle
resetButton.addEventListener('click', resetBoard);
});