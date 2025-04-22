// TESTS START

//alert("hello world !");

// TESTS END

const state = {
    grid: Array(6)
        .fill()
        .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};

function updateGrid() {

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
};

function startup() {
    const game = document.getElementById('game');
    drawGrid(game);
};

startup();