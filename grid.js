const container = document.querySelector('.container');
const grid = {rows: 8, columns: 8}
const total = grid.rows * grid.columns;

//Buttons
const draw = document.getElementById('draw');
const rainbowMode = document.getElementById('rainbow-mode');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');

draw.addEventListener('click', btn => {
    console.log('draw');
})

rainbowMode.addEventListener('click', btn => {
    console.log('rainbowMode');
})

eraser.addEventListener('click', btn => {
    console.log('eraser');
})

clear.addEventListener('click', btn => {
    console.log('clear');
})

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

//mouse
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Change div color
/*const boxes = document.getElementsByClassName('box');
for (let i=0;i<boxes.length;i++) {
    boxes[i].style.backgroundColor = 'red';
}

function background () {
    const color = 'green';
    return color;
}

for(let i=0;i<boxes.length;i++) {
    boxes[i].onmouseover = function(e) {
        e.target.style.backgroundColor=background();
    }
}

for(let i=0;i<boxes.length;i++) {
    if (mouseDown = true) {
    boxes[i].onmouseover = function(e) {
        e.target.style.backgroundColor=background();
    }} 
}*/


const mode = color
const color = "00FF00"

function colorChange(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (mode === 'rgb') {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `r`
    } else if (mode === 'color') {
        e.target.style.backgroundColor = color;
    } else if (mode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe'
    }
}