

const slider = document.getElementById('myRange');
const output = document.getElementById('value');

//slider
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = `${this.value} x ${this.value}`;
}


//Buttons
const draw = document.getElementById('draw');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');

draw.addEventListener('click', btn => modeSelection('draw'));
rainbow.addEventListener('click', btn => modeSelection('rainbow'));
eraser.addEventListener('click', btn => modeSelection('eraser'));
clear.addEventListener('click', btn => modeSelection('clear'))


const grid = document.querySelector('.grid');
const gridSize = 20


createGrid(gridSize)

function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        grid.append(square);
        square.textContent = `${i +1}`;
    }
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}), 1fr`;
}




//Grid
/*createGrid(total);

function createGrid(total) {
    for (let i = 0; i < total; i++) {
        const divs = document.createElement('div');
        container.append(divs);
        divs.textContent = `${i+1}`;
        divs.classList.add('box');
    }
    container.style.setProperty(`grid-template-columns`, `repeat(${grid.columns},1fr)`);
}*/

//Change div color

const boxes = document.getElementsByClassName('box')

/*function colorSelection() {
    const color = 'green';
    return color;
}*/

function backgroundColor() {
    const color = 'green';
}


for(let i=0;i<boxes.length;i++) {
    boxes[i].onclick = function(e) {
        e.target.style.backgroundColor=color;
    } 
};