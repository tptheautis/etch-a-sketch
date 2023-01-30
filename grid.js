const slider = document.getElementById('myRange');
const output = document.getElementById('value');
let click = false;
let color = 'black'
let gridSize = 2;

output.textContent = slider.value;

output.textContent = '2 x 2'

slider.oninput = function() {
    output.textContent = `${this.value} x ${this.value}`;
}

const draw = document.getElementById('draw');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
 
createGrid(gridSize)

function createGrid(gridSize) {
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove()); 

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        grid.append(square);
        square.addEventListener('mouseover', colorSquare);
        /*square.textContent = `${i +1}`;*/
    }
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}), 1fr`;
}

function colorSquare(e) {
    if (click) { 
        if (color === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function clearGrid() {
    console.log('clear')
    let grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => (div.style.backgroundColor = 'white'));
}

document.querySelector('body').addEventListener('click', () => {
    click = !click;
});