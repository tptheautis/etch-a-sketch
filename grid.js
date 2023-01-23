

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
let gridSize = 1;
 
createGrid(gridSize)

function createGrid(gridSize) {
    const squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove()); /*Resets board everytime new slider input is recieved */
    
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
    this.style.backgroundColor = 'green';
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