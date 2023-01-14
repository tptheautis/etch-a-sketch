//Adding divs
const container = document.querySelector('.container');
const grid = {rows: 4, columns: 4}
const total = grid.rows * grid.columns;

createGrid(total);

function createGrid(total) {
    for (let i = 0; i < total; i++) {
        const element = document.createElement('div');
        container.append(element);
        element.textContent = `${i+1}`;
        element.classList.add('box');
    }
}
