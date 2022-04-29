const container = document.getElementById('container');
const startButton = document.getElementById('startButton');

let gridSize = 10; // Default grid size of 10
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`; // Set number of columns to grid size
buildGrid(); // Build initial Grid
addHoverListeners(); // Add listeners to initial grid

// Function => Create grid of divs using provided quantity
function buildGrid() {
        for (let i = 1; i <= (gridSize * gridSize); i++) { // Square grid size to get total number of squares
        const div = document.createElement('div');
        div.classList.add(i, 'square');
        container.appendChild(div);
    }
}

// Clean up old grid before building new grid
function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Define function for adding listeners to squares
function addHoverListeners() {
    squares = Array.from(document.getElementsByClassName('square'));
    squares.forEach((square) => {
    square.addEventListener('mouseover', () => addBGColor(square))
    square.addEventListener('mouseout', () => remBGColor(square))
    });
}
addHoverListeners();

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