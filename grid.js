const container = document.querySelector('.container');
const grid = {rows: 8, columns: 8}
const total = grid.rows * grid.columns;

//Grid
createGrid(total);

function createGrid(total) {
    for (let i = 0; i < total; i++) {
        const element = document.createElement('div');
        container.append(element);
        element.textContent = `${i+1}`;
        element.classList.add('box');
    }
    container.style.setProperty(`grid-template-columns`, `repeat(${grid.columns},1fr)`);
}
