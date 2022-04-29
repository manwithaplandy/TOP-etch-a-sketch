const container = document.getElementById('container');

// Create grid of 16 divs
for (let i = 1; i < 17; i++) {
    const div = document.createElement('div');
    div.classList.add(i, 'square');
    div.textContent = i;
    container.appendChild(div);
}

squares = Array.from(document.getElementsByClassName('square'));

squares.forEach((square) => {
    square.addEventListener('mouseover', () => addBGColor(square))
    square.addEventListener('mouseout', () => remBGColor(square))
});

let addBGColor = (square) => {
    square.classList.add('hoverOver'); 
}

let remBGColor = (square) => {
    square.classList.remove('hoverOver');
}