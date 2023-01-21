

const slider = document.getElementById('myRange');
const output = document.getElementById('value');
const gridSize = slider.output;
const container = document.querySelector('.container');
const grid = {rows: 8, columns: 8};
const rows = gridSize
const columns = gridSize;
const total = grid.rows * grid.columns;

//slider
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}`;
    const gridSize = this.value;
    console.log(gridSize)
}


//Buttons
const draw = document.getElementById('draw');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');

function modeSelection(draw, rainbow, eraser, clear) {
    const orange = '#00FF00'
    if (modeSelection = draw) {
        let color = orange;
    }
}

draw.addEventListener('click', btn => modeSelection('draw'));
rainbow.addEventListener('click', btn => modeSelection('rainbow'));
eraser.addEventListener('click', btn => modeSelection('eraser'));
clear.addEventListener('click', btn => modeSelection('clear'))

function modeSelection(draw, rainbow, eraser, clear) {
    const orange = '#00FF00'
    if (modeSelection = draw) {
        let color = orange;
    }
}

//Grid
createGrid(total);

function createGrid(total) {
    for (let i = 0; i < total; i++) {
        const divs = document.createElement('div');
        container.append(divs);
        divs.textContent = `${i+1}`;
        divs.classList.add('box');
    }
    container.style.setProperty(`grid-template-columns`, `repeat(${grid.columns},1fr)`);
}

//Change div color

const boxes = document.getElementsByClassName('box')

function colorSelection() {
    const color = 'green';
    return color;
}

for(let i=0;i<boxes.length;i++) {
    boxes[i].onclick = function(e) {
        e.target.style.backgroundColor=colorSelection();
    } 
}

//C

