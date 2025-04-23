// TESTS START

//alert("hello world !");

// TESTS END
const dictionary = [
    'Buck',
    'Eddie',
    'Blaze',
    'Crash',
    'Avion',
    'Panic',
    'Alert',
    'Bobby',
    'Chris',
    'Grant',
    'Harry',
    'Karen',
    'Susan',
    'Linda',
    'Quiet',
    'Alarm'

];

const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(6).fill().map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};

function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        };
    };
};

function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = letter;

    container.appendChild(box);
    return box;

};

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    // boucle pour les lignes
    for (let i = 0; i < 6; i++) {
        // boucle pour les colonnes
        for (let j = 0; j < 5; j++) {
            drawBox(grid, i, j);
        }
    }
    container.appendChild(grid);
};

function registerKeyboardEvents() {
    document.body.onkeydown = (e) => {
        const key = e.key;

        if (key === 'Enter') {
            if (state.currentCol === 5) {
                const word = getCurrentWord();
                if (isWorldValid(word)) {
                    revealWord(word);
                    state.currentRow++;
                    state.currentCol = 0;
                }
                else {
                    alert('Mot non valide.');
                }
            }
        };

        if (key === 'Backspace') {
            removeLetter();
        };

        if (isLetter(key)) {
            addLetter(key);
        };
        updateGrid();
    };
};

function getCurrentWord() {
    return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
};

// Vérifie que le mot est présent dans le dictionnaire.
function isWordValid(word) {
    return dictionary.includes(word);
};

function revealWord(guess) {
    const row = state.currentRow;

    for (let i = 0; i < 5; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent;

        // Si la lettre est correcte et bien placée.
        if (letter === state.secret[i]) {
            box.classList.add('box__right');
        }
        // Si la lettre est correcte et malplacée.
        else if (state.secret.includes(letter)) {
            box.classList.add('box__wrong');
        }

        //Si la lettre est incorrecte.
        else {
            box.classList.add('box__empty');
        }
    }
    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === 5;

    if (isWinner) {
        alert('Félicitations !');
    }
    else if (isGameOver) {
        alert(`Défaite ! le mot était ${state.secret}.`);
    }

};

function startup() {
    const game = document.getElementById('game');
    drawGrid(game);

    registerKeyboardEvents();

};

startup();