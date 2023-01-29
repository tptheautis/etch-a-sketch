const slider = document.getElementById('myRange');
const output = document.getElementById('value');
let click = false;
let color = 'black'

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}`;
}

const draw = document.getElementById('draw');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const grid = document.querySelector('.grid');
let gridSize = 1;
 
createGrid(gridSize)

function createGrid(gridSize) {
    let clear = document.getElementById('clear');
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
    let clear = document.getElementById('clear');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove()); 
}

document.querySelector('body').addEventListener('click', () => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = "Active";
        } else {
            document.querySelector(".mode").textContent = 'In-Active';
        }
    }
})