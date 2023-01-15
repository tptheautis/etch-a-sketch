const container = document.querySelector('.container');
const grid = {rows: 8, columns: 8}
const total = grid.rows * grid.columns;


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
const boxes = document.getElementsByClassName('box');
for (let i=0;i<boxes.length;i++) {
    boxes[i].style.backgroundColor = 'red';
}

function background () {
    const color = 'green';
    return color;
}

for(let i=0;i<boxes.length;i++) {
    boxes[i].onclick = function(e) {
        e.target.style.backgroundColor=background();
    }
}