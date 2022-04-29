const container = document.getElementById('container');
const startButton = document.getElementById('startButton');

let gridSize = 10; // Default grid size of 10
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`; // Set number of columns to grid size

// Create grid of divs using provided quantity
for (let i = 1; i <= (gridSize * gridSize); i++) { // Square grid size to get total number of squares
    const div = document.createElement('div');
    div.classList.add(i, 'square');
    container.appendChild(div);
}

squares = Array.from(document.getElementsByClassName('square'));

squares.forEach((square) => {
    square.addEventListener('mouseover', () => addBGColor(square))
    square.addEventListener('mouseout', () => remBGColor(square))
});

// Change background color when mouse is over square
let addBGColor = (square) => {
    square.classList.add('hoverOver'); 
}

let remBGColor = (square) => {
    setTimeout(square.classList.remove('hoverOver'), 2000);
}

// Start button prompts for grid size
startButton.addEventListener('click', () => setGridSize());

let setGridSize = () => {
    gridSize = prompt('How big would you like the grid?');
    gridSize = parseInt(gridSize); // Convert to int
}